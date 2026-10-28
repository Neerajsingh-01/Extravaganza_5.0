/* Paste your Google Form link between the quotes */
var FORM_URL = "https://forms.gle/1YwsdKzzWiP4pEPH9";

(function () {
  var regButtons = document.querySelectorAll(".regbtn");
  var safeFormUrl = typeof FORM_URL === "string" ? FORM_URL.trim() : "";

  Array.prototype.forEach.call(regButtons, function (button) {
    if (!button) return;

    if (safeFormUrl) {
      button.href = safeFormUrl;
      button.target = "_blank";
      button.rel = "noopener";
    } else {
      button.textContent = "Registration link coming soon";
      button.className += " off";
    }
  });

  function cd(id, targetDate) {
    var el = document.getElementById(id);
    if (!el) return;

    var diff = targetDate.getTime() - Date.now();
    if (diff <= 0) {
      el.innerHTML = "<b style='padding:8px'>Started! 🎉</b>";
      return;
    }

    var values = [
      [Math.floor(diff / 864e5), "Days"],
      [Math.floor(diff / 36e5) % 24, "Hours"],
      [Math.floor(diff / 6e4) % 60, "Mins"],
      [Math.floor(diff / 1e3) % 60, "Secs"]
    ];

    el.innerHTML = values.map(function (unit) {
      return "<div><b>" + unit[0] + "</b><span>" + unit[1] + "</span></div>";
    }).join("");
  }

  function tick() {
    cd("c1", new Date(2026, 9, 21));
    cd("c2", new Date(2026, 10, 4));
  }

  tick();
  setInterval(tick, 1000);
}());
