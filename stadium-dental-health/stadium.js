(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = document.querySelector("[data-nav-links]");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("menu-open", open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" && e.key !== "Esc") return;
      if (!links.classList.contains("open")) return;
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
      toggle.focus();
    });
  }

  // Hide the sticky bottom bar while a form field has focus so it never covers the keyboard.
  var fieldSelector = "input, select, textarea";
  document.addEventListener("focusin", function (e) {
    if (e.target && e.target.matches && e.target.matches(fieldSelector)) {
      document.body.classList.add("field-focus");
    }
  });
  document.addEventListener("focusout", function (e) {
    var next = e.relatedTarget;
    if (!next || !next.matches || !next.matches(fieldSelector)) {
      document.body.classList.remove("field-focus");
    }
  });

  // ?reason=smile preselects Cosmetic / smile consult on the contact form
  try {
    var params = new URLSearchParams(window.location.search);
    var reason = params.get("reason");
    var reasonSelect = document.querySelector("[data-reason]");
    if (reason && reasonSelect) {
      var opt = reasonSelect.querySelector('option[value="' + reason + '"]');
      if (opt) reasonSelect.value = reason;
    }
  } catch (e) {}

  document.querySelectorAll("[data-booking-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = form.querySelector("[data-form-success]");
      if (success) {
        success.classList.add("show");
        if (success.focus) success.focus();
      }
      form.reset();
    });
  });

  // Phone bar stays hidden on the home hero until the active Request button scrolls away.
  var bar = document.querySelector("[data-sticky-actions]");
  var ctaTargets = [
    document.querySelector(".tooth-hero__cta .btn"),
    document.querySelector(".hero-intro__request")
  ].filter(Boolean);
  if (bar && ctaTargets.length && "IntersectionObserver" in window) {
    var mq = window.matchMedia("(max-width: 767px)");
    var visibleSet = new Set();
    function isShownInViewport(el) {
      var r = el.getBoundingClientRect();
      return window.getComputedStyle(el).display !== "none" &&
        r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < window.innerHeight;
    }
    function sync() {
      bar.classList.toggle("is-waiting", mq.matches && visibleSet.size > 0);
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.boundingClientRect.width > 0 && entry.boundingClientRect.height > 0) {
          visibleSet.add(entry.target);
        } else {
          visibleSet.delete(entry.target);
        }
      });
      sync();
    }, { threshold: 0 });
    ctaTargets.forEach(function (el) {
      if (isShownInViewport(el)) visibleSet.add(el);
      io.observe(el);
    });
    function onModeChange() {
      visibleSet.clear();
      ctaTargets.forEach(function (el) {
        if (isShownInViewport(el)) visibleSet.add(el);
      });
      sync();
    }
    if (mq.addEventListener) mq.addEventListener("change", onModeChange);
    else if (mq.addListener) mq.addListener(onModeChange);
    sync();
  }
})();
