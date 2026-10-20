---
title: Hobersal-Muffelofen
description: Einen Zyklus aus Rampe, Haltezeit und Abkühlung am Hobersal-Muffelofen programmieren (Programmregler Fuji Electric PXF4, Thermoelement Typ K).
translation: machine
---

# Hobersal-Muffelofen (Programmregler Fuji Electric PXF4)

<div class="facts" markdown>

| | |
|---|---|
| **Wofür** | Kalzinieren und Tempern **an Luft** (Oxide, Tiegel, Reinigung von Glasgeräten) |
| **Grenzen** | Maximal 1200 °C. **Arbeitsgrenzen des Labors: bis 1100 °C für einige Stunden, 1000 °C für Läufe von 24 h oder länger** |
| **Regler** | Fuji Electric PXF4, Thermoelement Typ K; bis zu 8 Rampen-/Haltesegmente |
| **Handbücher** | [Handbücher und Referenzen](../manuals.md#furnace) |

</div>

!!! danger "Sicherheit und Probenregeln"
    - Die Ofenatmosphäre ist **Luft**. Sulfid-, Halogenid- und andere luftempfindliche Proben müssen **versiegelt** sein (z. B. in einer evakuierten Quarzampulle) — geben Sie nie eine offene Sulfidprobe in den Ofen.
    - Verwenden Sie hitzebeständige Handschuhe, Zange und Gesichtsschutz zum Be- und Entladen heißer Gegenstände. Öffnen Sie die Tür nur unterhalb der in den Laborregeln vereinbarten Temperatur.
    - Erhitzen Sie versiegelte Behälter nie über ihre Belastungsgrenze hinaus und erhitzen Sie keine brennbaren oder giftige Stoffe freisetzenden Materialien.

## Vorführung — Beispiel: 850 °C für 30 min, Aufheizen mit 5 °C/min, Abkühlen mit 2 °C/min

<div class="demo" data-demo="muffle-furnace">
--8<-- "muffle-furnace.svg"
</div>

<div class="demo-steps" markdown>

1. **Kennen Sie die Grenzen.** Maximal 1200 °C; in diesem Labor nicht mehr als 1100 °C (einige Stunden) bzw. 1000 °C (24 h oder länger).
2. **Ofen einschalten** am Schalter rechts. Die Anzeige zeigt **PV** (Temperatur im Ofen) und **SV** (Sollwert).
3. **SV auf 20 °C setzen** mit ▲ / ▼. Die Rampenzeiten werden ab diesem Startwert berechnet.
4. **Programmmenü öffnen.** Halten Sie **SEL**, bis **CH 1** erscheint, und drücken Sie dann zweimal ▼, um zu **CH 3** (Rampen-/Halteprogramm) zu gelangen.
5. **Muster.** Drücken Sie SEL: **PtN** muss **0** sein (falls nicht, SEL drücken und auf 0 setzen).
6. **Zeiteinheit.** Drücken Sie ▼: **tCMU** muss **HHMM** (Stunden:Minuten) anzeigen.
7. **Erste Zieltemperatur.** Drücken Sie ▼ bis **SV-1**, drücken Sie SEL (der Wert blinkt), stellen Sie mit ◀ ▲ ▼ **850** ein und drücken Sie SEL.
8. **Aufheizzeit.** Drücken Sie ▼ bis **tM1r** (Rampenzeit). Für 5 °C/min von 20 °C auf 850 °C: (850 − 20) / 5 = 166 min = **02:46**. Einstellen und SEL drücken.
9. **Haltezeit.** Drücken Sie ▼ bis **tM1S** (Haltezeit) und stellen Sie **00:30** ein.
10. **Abkühlen.** Drücken Sie ▼ bis **SV-2** und stellen Sie **20** ein; dann **tM2r** = (850 − 20) / 2 = 415 min = **06:55**; dann **tM2S** = **00:00**.
11. **Ungenutzte Segmente.** Prüfen Sie, dass SV-3 … SV-8 auf **0** und ihre Zeiten auf **00:00** stehen, und drücken Sie die Zurück-Taste (⮌), um das Menü zu verlassen.
12. **Probe einsetzen** (in ihrem Tiegel oder der versiegelten Ampulle) und Tür schließen.
13. **Starten.** Drücken Sie SEL: **StbY** muss **off** sein. Drücken Sie ▼ bis **ProG**, drücken Sie SEL, ändern Sie **off → Run** und drücken Sie SEL. Kehren Sie zur Hauptanzeige zurück — unten links steht **Run**.
14. **Stoppen.** Ein beendetes Programm stoppt von selbst; schalten Sie den Ofen dann aus. Vorzeitig stoppen: SEL halten, ▼ bis **ProG**, **Run → off** ändern, SEL drücken und zur Hauptanzeige zurückkehren.

</div>

## Rampenzeit-Rechner

Der PXF4 verlangt Rampen**zeiten**, keine Raten. Geben Sie Ihre Werte ein:

<div class="bk" id="ramp-calc">
<div class="bk-row">
<label>Start (°C)<input type="number" id="rc-a" value="20"></label>
<label>Ziel (°C)<input type="number" id="rc-b" value="850"></label>
<label>Rate (°C/min)<input type="number" id="rc-r" value="5" step="0.1" min="0.1"></label>
<label>Rampenzeit (HH:MM)<input type="text" id="rc-out" readonly></label>
</div>
</div>

<script>
(function () {
  function upd() {
    var a = parseFloat(document.getElementById("rc-a").value),
        b = parseFloat(document.getElementById("rc-b").value),
        r = parseFloat(document.getElementById("rc-r").value),
        o = document.getElementById("rc-out");
    if (!(r > 0) || isNaN(a) || isNaN(b)) { o.value = ""; return; }
    var m = Math.round(Math.abs(b - a) / r), h = Math.floor(m / 60);
    o.value = (h < 10 ? "0" : "") + h + ":" + ((m % 60) < 10 ? "0" : "") + (m % 60) + "  (" + m + " min)";
  }
  ["rc-a", "rc-b", "rc-r"].forEach(function (id) { document.getElementById(id).addEventListener("input", upd); });
  upd();
})();
</script>

!!! note "Programmgenauigkeit"
    Die Rampe wird ab SV = 20 °C berechnet. Ist der Ofen beim Start noch warm, weicht die tatsächliche Aufheizrate im ersten Segment von der nominalen ab. Notieren Sie den PV zu Beginn jedes Laufs.
