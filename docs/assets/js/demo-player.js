/*
 * Demo player: turns an inline SVG plus the ordered list that follows it into
 * a step-by-step animated demonstration.
 *
 * Markup (in a Markdown page):
 *   <div class="demo" data-demo="eis-cell">
 *   --8<-- "eis-cell.svg"
 *   </div>
 *   <div class="demo-steps" markdown>
 *   1. First step text ...
 *   2. Second step text ...
 *   </div>
 *
 * The step TEXT lives in the Markdown list (so it is translated with the page).
 * The step ANIMATION lives in window.DEMOS[name] (demos.js), one entry per list
 * item. Each entry may contain:
 *   show: [ids]      parts that become visible (cumulative)
 *   hide: [ids]      parts that become hidden (cumulative)
 *   hl:   [ids]      parts highlighted during this step only
 *   set:  {id: css}  CSS transform applied to a part (cumulative)
 *   txt:  {id: str}  text content of an SVG <text> (cumulative)
 * Elements with class "part" start hidden unless listed in DEMOS[name].base.
 * A part with data-from="dx,dy" slides in from that offset when shown.
 * A part with data-origin="x y" rotates/scales about that point (SVG units).
 * SVG <text data-i18n="key"> labels are replaced from window.DEMO_LABELS[lang][key].
 */
(function () {
  "use strict";
  var ui = function (k) { return window.ui ? window.ui(k) : k; };

  function stateAt(def, k) {
    var vis = new Set(def.base || []);
    var tf = {}, tx = {};
    for (var i = 0; i <= k && i < def.steps.length; i++) {
      var s = def.steps[i] || {};
      (s.show || []).forEach(function (id) { vis.add(id); });
      (s.hide || []).forEach(function (id) { vis.delete(id); });
      Object.keys(s.set || {}).forEach(function (id) { tf[id] = s.set[id]; });
      Object.keys(s.txt || {}).forEach(function (id) { tx[id] = s.txt[id]; });
    }
    var hl = new Set((def.steps[k] && def.steps[k].hl) || []);
    return { vis: vis, tf: tf, tx: tx, hl: hl };
  }

  function translateLabels(svg) {
    var lang = window.uiLang ? window.uiLang() : "en";
    var dict = (window.DEMO_LABELS || {})[lang];
    if (!dict) return;
    svg.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v) el.textContent = v;
    });
  }

  function init(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = "1";
    var name = root.getAttribute("data-demo");
    var def = (window.DEMOS || {})[name];
    var svg = root.querySelector("svg");
    var stepsBox = root.nextElementSibling;
    while (stepsBox && !(stepsBox.classList && stepsBox.classList.contains("demo-steps"))) {
      stepsBox = stepsBox.nextElementSibling;
    }
    var items = stepsBox ? Array.prototype.slice.call(stepsBox.querySelectorAll("ol > li")) : [];
    if (!def || !svg || !items.length) {
      var p = document.createElement("p");
      p.className = "demo-caption";
      p.textContent = ui("demoMissing");
      root.appendChild(p);
      return;
    }
    if (def.steps.length !== items.length && window.console) {
      console.warn("[demo " + name + "] " + def.steps.length + " animation steps but " + items.length + " text steps");
    }
    var n = Math.min(def.steps.length, items.length);
    translateLabels(svg);

    var parts = {};
    svg.querySelectorAll(".part[id]").forEach(function (el) {
      parts[el.id] = el;
      var o = el.getAttribute("data-origin");
      if (o) { el.style.transformBox = "view-box"; el.style.transformOrigin = o.replace(/\s+/g, "px ") + "px"; }
    });
    var texts = {};
    svg.querySelectorAll("text[id]").forEach(function (el) { texts[el.id] = el; el.dataset.orig = el.textContent; });

    // chrome
    var progress = document.createElement("div");
    progress.className = "demo-progress";
    progress.innerHTML = "<span></span>";
    var caption = document.createElement("div");
    caption.className = "demo-caption";
    caption.setAttribute("aria-live", "polite");
    var bar = document.createElement("div");
    bar.className = "demo-bar";
    function btn(cls, label, title) {
      var b = document.createElement("button");
      b.type = "button"; b.className = cls; b.textContent = label; b.title = title; b.setAttribute("aria-label", title);
      bar.appendChild(b); return b;
    }
    var bRestart = btn("demo-restart", "⏮", ui("restart"));
    var bPrev = btn("demo-prev", "◀", ui("prev"));
    var bPlay = btn("demo-play", "▶ " + ui("play"), ui("play"));
    var bNext = btn("demo-next", "▶", ui("next"));
    var count = document.createElement("span");
    count.className = "demo-count";
    bar.appendChild(count);
    root.appendChild(progress);
    root.appendChild(caption);
    root.appendChild(bar);

    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) root.classList.add("reduced");
    var cur = 0, timer = null;

    function render(k) {
      cur = Math.max(0, Math.min(n - 1, k));
      var st = stateAt(def, cur);
      Object.keys(parts).forEach(function (id) {
        var el = parts[id];
        var on = st.vis.has(id);
        el.classList.toggle("on", on);
        el.classList.toggle("hl", on && st.hl.has(id));
        var from = el.getAttribute("data-from");
        if (on) el.style.transform = st.tf[id] || "";
        else el.style.transform = from ? "translate(" + from.split(",").map(function (v) { return v.trim() + "px"; }).join(",") + ")" : (st.tf[id] || "");
      });
      Object.keys(texts).forEach(function (id) {
        texts[id].textContent = st.tx[id] != null ? st.tx[id] : texts[id].dataset.orig;
      });
      items.forEach(function (li, i) { li.classList.toggle("active", i === cur); });
      caption.innerHTML = "<strong class='demo-n'>" + (cur + 1) + ".</strong>" + items[cur].innerHTML;
      count.textContent = (cur + 1) + " / " + n;
      progress.firstChild.style.width = ((cur + 1) / n * 100) + "%";
      bPrev.disabled = cur === 0;
      bNext.disabled = cur === n - 1;
    }

    function dwell(k) {
      var len = (items[k].textContent || "").length;
      return Math.max(3500, Math.min(14000, 1200 + len * 55));
    }
    function stop() {
      if (timer) clearTimeout(timer);
      timer = null;
      bPlay.textContent = "▶ " + ui("play");
    }
    function tick() {
      if (cur >= n - 1) { stop(); return; }
      render(cur + 1);
      timer = setTimeout(tick, dwell(cur));
    }
    function play() {
      if (cur >= n - 1) render(0);
      bPlay.textContent = "⏸ " + ui("pause");
      timer = setTimeout(tick, dwell(cur));
    }

    bPlay.addEventListener("click", function () { timer ? stop() : play(); });
    bPrev.addEventListener("click", function () { stop(); render(cur - 1); });
    bNext.addEventListener("click", function () { stop(); render(cur + 1); });
    bRestart.addEventListener("click", function () { stop(); render(0); });
    items.forEach(function (li, i) {
      li.addEventListener("click", function () { stop(); render(i); root.scrollIntoView({ behavior: "smooth", block: "nearest" }); });
    });
    root.tabIndex = 0;
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { stop(); render(cur + 1); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { stop(); render(cur - 1); e.preventDefault(); }
      else if (e.key === " ") { timer ? stop() : play(); e.preventDefault(); }
    });

    render(0);
    root._demo = { render: render, n: n, state: function () { return cur; } };
  }

  function boot() { document.querySelectorAll(".demo[data-demo]").forEach(init); }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(boot);
  else if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
