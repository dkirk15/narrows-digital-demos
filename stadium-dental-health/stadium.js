(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = document.querySelector("[data-nav-links]");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Optional: ?reason=smile preselects smile consultation on contact form
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
})();
