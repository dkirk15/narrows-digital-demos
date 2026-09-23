(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = document.querySelector("[data-nav-links]");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll("[data-nav-drop]").forEach(function (drop) {
    var btn = drop.querySelector("[data-drop-toggle]");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 900px)").matches) {
        e.preventDefault();
        drop.classList.toggle("open");
      }
    });
  });
  function showSuccess(form) {
    var success = form.querySelector("[data-form-success]");
    if (success) {
      success.classList.add("show");
      if (success.focus) success.focus();
    }
    form.reset();
  }
  document.querySelectorAll("[data-booking-form], [data-employer-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      showSuccess(form);
    });
  });
  var params = new URLSearchParams(window.location.search);
  var reason = params.get("reason");
  if (reason) {
    var reasonEl = document.querySelector("[data-reason-select]");
    if (reasonEl) {
      var map = {
        employer: "Employer service",
        work: "Work injury / L&I",
        mva: "Motor vehicle / personal injury",
        other: "Other"
      };
      var value = map[reason.toLowerCase()] || reason;
      for (var i = 0; i < reasonEl.options.length; i++) {
        if (reasonEl.options[i].value === value || reasonEl.options[i].textContent === value) {
          reasonEl.selectedIndex = i;
          break;
        }
      }
    }
    var employerBlock = document.querySelector("[data-employer-block]");
    if (reason.toLowerCase() === "employer" && employerBlock) {
      employerBlock.hidden = false;
    }
  }
})();
