(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = document.querySelector("[data-nav-links]");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  try {
    var params = new URLSearchParams(window.location.search);
    var reason = params.get("reason");
    var reasonSelect = document.querySelector("[data-reason]");
    if (reason && reasonSelect) {
      Array.prototype.forEach.call(reasonSelect.options, function (opt) {
        if (opt.value === reason) reasonSelect.value = reason;
      });
    }
  } catch (err) {}

  document.querySelectorAll("[data-booking-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var success = form.querySelector("[data-form-success]");
      var invalid = false;

      form.querySelectorAll(".field-error").forEach(function (el) {
        el.classList.remove("show");
      });
      form.querySelectorAll("[aria-invalid]").forEach(function (el) {
        el.removeAttribute("aria-invalid");
      });
      if (success) success.classList.remove("show");

      function fail(input) {
        invalid = true;
        if (!input) return;
        input.setAttribute("aria-invalid", "true");
        var err = form.querySelector('[data-error-for="' + input.id + '"]');
        if (err) {
          err.classList.add("show");
          input.setAttribute("aria-describedby", err.id);
        }
      }

      var name = form.querySelector("#name");
      var phone = form.querySelector("#phone");
      var email = form.querySelector("#email");
      var when = form.querySelector("#when");
      var status = form.querySelector("#patient-status");

      if (!name || !name.value.trim() || name.value.trim().length < 2) fail(name);
      var digits = phone ? phone.value.replace(/\D/g, "") : "";
      if (!phone || digits.length < 10) fail(phone);
      var emailOk = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!emailOk) fail(email);
      if (!when || !when.value.trim()) fail(when);
      if (!status || !status.value) fail(status);

      if (invalid) {
        var first = form.querySelector("[aria-invalid='true']");
        if (first && first.focus) first.focus();
        return;
      }

      form.reset();
      if (success) {
        success.classList.add("show");
        if (success.focus) success.focus();
      }
    });
  });
})();
