(function () {
  var btn = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("mainnav");
  if (btn && nav) {
    function setOpen(open) {
      nav.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* Phone bar: after the hero Book button (or the inner page header) leaves,
     and not while #request, the footer, or a form field is on screen. */
  var bar = document.getElementById("callbar");
  if (bar && "IntersectionObserver" in window) {
    var gate = document.querySelector(".hcta") || document.querySelector(".page-header");
    var hideEls = [document.getElementById("request"), document.querySelector("footer")].filter(Boolean);
    var gateVis = true;
    var hideOn = [];
    var fieldFocus = false;
    var mq = window.matchMedia("(max-width: 767px)");

    function applyBar() {
      var show = mq.matches && !gateVis && hideOn.indexOf(true) === -1 && !fieldFocus;
      bar.classList.toggle("show", show);
      if (show) bar.removeAttribute("inert");
      else bar.setAttribute("inert", "");
    }

    if (gate) {
      new IntersectionObserver(function (entries) {
        gateVis = entries[0].isIntersecting;
        applyBar();
      }).observe(gate);
    } else {
      gateVis = false;
    }

    hideEls.forEach(function (el, i) {
      hideOn[i] = false;
      new IntersectionObserver(function (entries) {
        hideOn[i] = entries[0].isIntersecting;
        applyBar();
      }).observe(el);
    });

    function fieldFocused(node) {
      return !!(node && node.matches && node.matches("input, textarea, select"));
    }
    document.addEventListener("focusin", function (e) {
      fieldFocus = fieldFocused(e.target);
      applyBar();
    });
    document.addEventListener("focusout", function () {
      window.setTimeout(function () {
        fieldFocus = fieldFocused(document.activeElement);
        applyBar();
      }, 0);
    });
    if (mq.addEventListener) mq.addEventListener("change", applyBar);
    else if (mq.addListener) mq.addListener(applyBar);
    applyBar();
  }

  var form = document.getElementById("request-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  function setError(input, message) {
    var el = document.getElementById(input.id + "-error");
    if (!el) return;
    el.textContent = message || "";
    el.hidden = !message;
    if (message) {
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", el.id);
    } else {
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
    }
  }

  function clearStatus() {
    if (!status) return;
    status.replaceChildren();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearStatus();

    var name = form.querySelector("#name");
    var phone = form.querySelector("#phone");
    var email = form.querySelector("#email");
    var reason = form.querySelector("#reason");
    var firstInvalid = null;

    function check(input, message) {
      setError(input, message);
      if (message && !firstInvalid) firstInvalid = input;
    }

    var nameVal = name.value.trim();
    check(name, nameVal ? "" : "Enter your name.");

    var digits = phone.value.replace(/\D/g, "");
    check(phone, digits.length >= 10 ? "" : "Enter a phone number with area code.");

    var emailVal = email.value.trim();
    var emailOk = !emailVal || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
    check(email, emailOk ? "" : "Check the email address, or leave it blank.");

    check(reason, reason.value ? "" : "Choose a reason.");

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    form.reset();
    [name, phone, email, reason].forEach(function (input) { setError(input, ""); });
    var message = form.querySelector("#message");
    if (message) setError(message, "");

    if (!status) return;
    status.append("Thanks — this is a preview, so nothing was sent. Please call ");
    var link = document.createElement("a");
    link.href = "tel:+12532722605";
    link.textContent = "(253) 272-2605";
    status.append(link, " to book.");
    status.focus();
  });
})();
