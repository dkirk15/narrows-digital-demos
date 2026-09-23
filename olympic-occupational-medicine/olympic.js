(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = document.querySelector("[data-nav-links]");
  var drops = document.querySelectorAll("[data-nav-drop]");
  var desktopNav = window.matchMedia("(min-width: 1101px)");

  function closeNav() {
    if (!links) return;
    links.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  drops.forEach(function (drop) {
    var btn = drop.querySelector("[data-drop-toggle]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (desktopNav.matches) return;
      var open = drop.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    drop.addEventListener("focusin", function () {
      btn.setAttribute("aria-expanded", "true");
    });
    drop.addEventListener("focusout", function (e) {
      if (!drop.contains(e.relatedTarget)) {
        if (!desktopNav.matches) drop.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeNav();
    drops.forEach(function (drop) {
      drop.classList.remove("open");
      var btn = drop.querySelector("[data-drop-toggle]");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
    if (toggle) toggle.focus();
  });

  document.addEventListener("click", function (e) {
    if (!links || !toggle) return;
    if (!links.contains(e.target) && !toggle.contains(e.target)) closeNav();
  });

  function labelText(form, el) {
    var lab = form.querySelector('label[for="' + el.id + '"] span');
    if (lab) return lab.textContent.replace(/\s+/g, " ").trim();
    return "This field";
  }

  function showSuccess(form) {
    var success = form.querySelector("[data-form-success]");
    var errors = form.querySelector("[data-form-errors]");
    if (errors) errors.hidden = true;
    form.reset();
    syncEmployer();
    if (success) {
      success.hidden = false;
      success.focus();
    }
  }

  function showErrors(form, items) {
    var box = form.querySelector("[data-form-errors]");
    var success = form.querySelector("[data-form-success]");
    if (success) success.hidden = true;
    if (!box) {
      if (items[0]) items[0].el.focus();
      return;
    }
    var list = items.map(function (item) {
      return '<li><a href="#' + item.el.id + '">' + item.msg + "</a></li>";
    }).join("");
    box.innerHTML = "<p>Check these fields before sending.</p><ul>" + list + "</ul>";
    box.hidden = false;
    items[0].el.focus();
  }

  function validate(form) {
    var fields = form.querySelectorAll("input, select, textarea");
    var items = [];
    fields.forEach(function (el) {
      el.removeAttribute("aria-invalid");
      if (el.disabled || el.closest("[hidden]")) return;
      if (!el.willValidate) return;
      if (el.checkValidity()) return;
      el.setAttribute("aria-invalid", "true");
      var name = labelText(form, el);
      var msg = name + " is required.";
      if (el.validity.typeMismatch && el.type === "email") {
        msg = "Enter an email address like name@company.com.";
      }
      items.push({ el: el, msg: msg });
    });
    return items;
  }

  document.querySelectorAll("[data-booking-form], [data-employer-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var items = validate(form);
      if (items.length) {
        showErrors(form, items);
        return;
      }
      showSuccess(form);
    });
    form.addEventListener("input", function (e) {
      var t = e.target;
      if (t && t.getAttribute && t.getAttribute("aria-invalid") === "true" && t.checkValidity()) {
        t.removeAttribute("aria-invalid");
      }
    });
  });

  var params = new URLSearchParams(window.location.search);
  var reasonEl = document.querySelector("[data-reason-select]");
  var employerBlock = document.querySelector("[data-employer-block]");
  var companyInput = employerBlock ? employerBlock.querySelector("input, textarea, select") : null;

  function syncEmployer() {
    if (!reasonEl || !employerBlock) return;
    var on = reasonEl.value === "Employer service";
    employerBlock.hidden = !on;
    if (companyInput) companyInput.required = on;
  }

  if (reasonEl) {
    var reason = params.get("reason");
    if (reason) {
      var map = {
        employer: "Employer service",
        work: "Work injury / L&I",
        mva: "Motor vehicle / personal injury",
        other: "Other"
      };
      var value = map[reason.toLowerCase()] || reason;
      for (var i = 0; i < reasonEl.options.length; i++) {
        if (reasonEl.options[i].value === value) {
          reasonEl.selectedIndex = i;
          break;
        }
      }
    }
    reasonEl.addEventListener("change", syncEmployer);
    syncEmployer();
  }

  var serviceEl = document.querySelector("[data-service-select]");
  if (serviceEl) {
    var service = (params.get("service") || "").toLowerCase();
    var allowed = { "drug-testing": 1, vaccinations: 1, "physical-exams": 1, other: 1 };
    if (allowed[service]) serviceEl.value = service;
  }
})();
