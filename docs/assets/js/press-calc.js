/*
 * Gauge pressure <-> pellet pressure calculator for the hydraulic press.
 * Markup (labels are translated in each page):
 *   <div class="press-calc"> ... inputs with data-pc="shaft|die|gauge|pellet" and an output data-pc="force" </div>
 * F = P_gauge * pi*d^2/4 (d = shaft/piston diameter); P_pellet = F / (pi*D^2/4) = P_gauge * (d/D)^2.
 */
(function () {
  "use strict";
  function fmt(x, n) { return isFinite(x) ? (Math.round(x * Math.pow(10, n)) / Math.pow(10, n)).toString() : ""; }
  function init(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = "1";
    var q = function (k) { return root.querySelector('[data-pc="' + k + '"]'); };
    var shaft = q("shaft"), die = q("die"), gauge = q("gauge"), pellet = q("pellet"), force = q("force");
    function ratio() {
      var d = parseFloat(shaft.value), D = parseFloat(die.value);
      return d > 0 && D > 0 ? (d / D) * (d / D) : NaN;
    }
    function showForce(pg) {
      var d = parseFloat(shaft.value);
      var F = pg * Math.PI * d * d / 4; /* MPa * mm^2 = N */
      force.value = isFinite(F) && F >= 0 ? fmt(F / 1000, 2) + " kN  (" + fmt(F / 9806.65, 2) + " t)" : "";
    }
    function fromGauge() {
      var pg = parseFloat(gauge.value), r = ratio();
      pellet.value = isFinite(pg * r) ? fmt(pg * r, 1) : "";
      showForce(pg);
    }
    function fromPellet() {
      var pp = parseFloat(pellet.value), r = ratio();
      var pg = pp / r;
      gauge.value = isFinite(pg) ? fmt(pg, 2) : "";
      showForce(pg);
    }
    gauge.addEventListener("input", fromGauge);
    pellet.addEventListener("input", fromPellet);
    shaft.addEventListener("input", fromGauge);
    die.addEventListener("input", fromGauge);
    fromGauge();
  }
  function boot() { document.querySelectorAll(".press-calc").forEach(init); }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(boot);
  else if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
