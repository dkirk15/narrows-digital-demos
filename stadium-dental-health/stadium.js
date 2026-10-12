(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = document.querySelector("[data-nav-links]");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

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

  // Phone bar stays hidden on the home hero until the Request button scrolls away.
  var bar = document.querySelector("[data-sticky-actions]");
  var heroBtn = document.querySelector(".tooth-hero__cta .btn");
  if (bar && heroBtn && "IntersectionObserver" in window) {
    var mq = window.matchMedia("(max-width: 700px)");
    var inView = true;
    function sync() {
      bar.classList.toggle("is-waiting", mq.matches && inView);
    }
    var io = new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      sync();
    }, { threshold: 0 });
    io.observe(heroBtn);
    function onModeChange() {
      var r = heroBtn.getBoundingClientRect();
      var shown = window.getComputedStyle(heroBtn).display !== "none" && r.width > 0 && r.height > 0;
      inView = shown && r.bottom > 0 && r.top < window.innerHeight;
      sync();
    }
    if (mq.addEventListener) mq.addEventListener("change", onModeChange);
    else if (mq.addListener) mq.addListener(onModeChange);
    sync();
  }
})();
