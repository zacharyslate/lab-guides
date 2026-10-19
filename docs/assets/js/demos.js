/*
 * Animation steps for each demonstration. One entry per item of the step list
 * on the page (same order). See demo-player.js for the meaning of each key.
 * If you add or remove a step in a page, add or remove the matching entry here.
 */
window.DEMOS = window.DEMOS || {};

/* ---------------- MBraun EasyLab glovebox ---------------- */
window.DEMOS["glovebox"] = {
  base: ["ledEco", "ledCirc", "gloves", "pedals", "pistons", "needle", "vrefill", "vvac", "innerdoor", "outerdoor"],
  steps: [
    { set: { needle: "rotate(-110deg)" }, txt: { gaugeval: "−94 kPa" }, hl: ["ledEco", "needle", "innerdoor", "outerdoor"] },
    { hide: ["ledEco"], show: ["ledPump"], hl: ["ledPump"] },
    { hl: ["pistons", "ledCirc"] },
    { set: { vrefill: "rotate(90deg)", needle: "rotate(0deg)" }, show: ["flowAr"], txt: { gaugeval: "0 kPa" }, hl: ["vrefill", "needle"] },
    { set: { vrefill: "rotate(0deg)", outerdoor: "translate(0px,-96px)", bottle: "translate(-110px,0px)" }, hide: ["flowAr"], show: ["bottle"], hl: ["outerdoor", "bottle"] },
    { set: { outerdoor: "translate(0px,0px)", vvac: "rotate(90deg)", needle: "rotate(-110deg)" }, show: ["flowVac"], txt: { gaugeval: "−94 kPa", timer: "15:00", cycle: "1 / 3" }, hl: ["vvac", "needle"] },
    { set: { vvac: "rotate(0deg)", vrefill: "rotate(90deg)", needle: "rotate(0deg)" }, hide: ["flowVac"], show: ["flowAr"], txt: { gaugeval: "0 kPa", timer: "" }, hl: ["vrefill"] },
    { set: { vrefill: "rotate(0deg)", vvac: "rotate(90deg)", needle: "rotate(-110deg)" }, hide: ["flowAr"], show: ["flowVac"], txt: { gaugeval: "−94 kPa", timer: "15:00", cycle: "2 / 3 → 3 / 3" }, hl: ["needle"] },
    { set: { needle: "rotate(-55deg)" }, txt: { gaugeval: "≈ −47 kPa", timer: "", cycle: "≥ 10 ×" }, hl: ["needle", "bottle"] },
    { set: { vvac: "rotate(0deg)", vrefill: "rotate(0deg)", needle: "rotate(0deg)", innerdoor: "translate(0px,-96px)", bottle: "translate(-430px,0px)" }, hide: ["flowVac", "flowAr"], txt: { gaugeval: "0 kPa", cycle: "", timer: "" }, hl: ["gloves", "innerdoor"] },
    { set: { innerdoor: "translate(0px,0px)" }, hl: ["pedals"] },
    { set: { vvac: "rotate(90deg)", needle: "rotate(-110deg)" }, show: ["flowVac"], txt: { gaugeval: "−94 kPa", timer: "≥ 5:00" }, hl: ["vvac", "innerdoor", "outerdoor"] },
    { set: { vvac: "rotate(0deg)" }, hide: ["flowVac"], show: ["ledEco"], txt: { timer: "" }, hl: ["ledEco", "pistons", "vvac", "vrefill"] }
  ]
};

/* ---------------- Rotavapor flask assembly (glovebox) ---------------- */
window.DEMOS["rv-glassware"] = {
  base: ["asm", "flask", "adapter", "vh", "gtube"],
  steps: [
    { set: { adapter: "translate(160px,40px)", vh: "rotate(90deg)" } },
    { hl: ["flask", "adapter"] },
    { show: ["grease"], hl: ["grease", "gtube"] },
    { set: { adapter: "translate(0px,0px)" }, hl: ["adapter"] },
    { show: ["keck"], hl: ["keck"] },
    { set: { vh: "rotate(0deg)" }, hl: ["vh"] },
    { hl: ["keck", "vh"] },
    { show: ["toRv"], set: { asm: "translate(350px,20px)" } }
  ]
};

/* ---------------- Büchi Rotavapor R-210 ---------------- */
window.DEMOS["rotavapor"] = {
  base: ["assembly", "combi", "knob", "hoseU", "bath", "lift", "liftH", "catchS", "ctrl", "startBtn", "stopBtn"],
  steps: [
    { hl: ["bath"] },
    { show: ["chLed"], txt: { chillT: "ON" }, hl: ["chLed"] },
    { txt: { bathT: "set T" }, hl: ["bath"] },
    { txt: { vacset: "set p" }, hl: ["ctrl"] },
    { show: ["recv"], hl: ["recv"] },
    { show: ["eflask", "keckR", "cockR"], set: { cockR: "rotate(60deg)" }, hl: ["combi", "cockR"] },
    { show: ["vfU"], txt: { vacset: "p ↓" }, hl: ["startBtn"] },
    { show: ["snow", "wfU"], txt: { chillT: "COOL" }, hl: ["snow"] },
    { set: { cockR: "rotate(-30deg)" }, show: ["rot"], hl: ["cockR", "rot"] },
    { hl: ["knob", "liftH", "catchS"] },
    { set: { assembly: "translate(0px,45px)" }, hide: ["hoseU", "vfU", "wfU"], show: ["hoseD", "vfD", "wfD"], hl: ["eflask"] },
    { show: ["cond"], hl: ["cond"] },
    { set: { assembly: "translate(0px,0px)", cockR: "rotate(60deg)" }, hide: ["hoseD", "vfD", "wfD", "rot"], show: ["hoseU", "vfU", "wfU"], hl: ["cockR"] },
    { hide: ["vfU", "snow", "wfU"], txt: { vacset: "vent", chillT: "OFF", bathT: "off" }, hl: ["stopBtn", "combi"] }
  ]
};

/* ---------------- AC impedance (EIS) cell + PMC-2000 ---------------- */
window.DEMOS["eis-cell"] = {
  base: ["balance", "press", "presscyl", "ram", "pneedle"],
  steps: [
    { show: ["dieAsm", "armS"], set: { pneedle: "rotate(-120deg)" }, txt: { bal: "0.000 g" }, hl: ["armS"] },
    { show: ["powder"], txt: { bal: "0.025 g" }, hl: ["powder"] },
    { show: ["armL"], hl: ["armL"] },
    { set: { dieAsm: "translate(490px,50px)", ram: "translate(0px,74px)", pneedle: "rotate(-75deg)" }, txt: { bal: "", pg: "4 MPa", ptime: "1:00" }, hl: ["pneedle"] },
    { hide: ["dieAsm"], show: ["eject", "pelletOut"], set: { ram: "translate(0px,58px)", pneedle: "rotate(-120deg)" }, txt: { pg: "", ptime: "" }, hl: ["pelletOut"] },
    { hide: ["balance", "eject", "pelletOut"], set: { ram: "translate(0px,0px)" }, show: ["pcb", "ccL", "gasL", "pel", "gasS", "ccS", "labelsB"], hl: ["pel", "gasL", "gasS"] },
    { show: ["miniCell"], set: { ram: "translate(0px,138px)", pneedle: "rotate(45deg)" }, txt: { pg: "18 MPa (Ø10) · 7.5 MPa (Ø6)", ptime: "3:00" }, hl: ["miniCell", "pneedle"] },
    { hide: ["miniCell"], show: ["plateT", "plateB", "screws", "ins", "m4"], set: { ram: "translate(0px,0px)", pneedle: "rotate(-120deg)" }, txt: { pg: "", ptime: "" }, hl: ["plateT", "plateB", "ins"] },
    { show: ["dims"], hl: ["dims", "screws"] },
    { hide: ["press", "presscyl", "ram", "pneedle", "labelsB"], show: ["pstat", "leads"], hl: ["leads", "m4"] },
    { show: ["nyq"], txt: { tempT: "≥ 45 min at T, then 3 MHz → 0.1 Hz" }, hl: ["nyq"] },
    { txt: { tempT: "40 → 60 → 80 → 100 → 120 °C" }, hl: ["nyq"] }
  ]
};

/* ---------------- Solid-state test battery + Neware CT-9008 ---------------- */
window.DEMOS["ssb-cell"] = {
  base: ["sceneA", "dieB"],
  steps: [
    { txt: { bal2: "0.000 g" } },
    { show: ["el"], txt: { bal2: "0.100 g" }, hl: ["el"] },
    { show: ["armL2"], set: { armL2: "translate(0px,8px)" }, txt: { pnote: "press · 4 MPa · 1 min" }, hl: ["armL2"] },
    { hide: ["armL2"], show: ["cat"], txt: { pnote: "", bal2: "+ 0.010 g" }, hl: ["cat"] },
    { show: ["armL2"], set: { armL2: "translate(0px,0px)" }, txt: { pnote: "press · 4 MPa · 1 min" }, hl: ["armL2"] },
    { hide: ["armL2", "el", "cat"], show: ["bil"], txt: { pnote: "", bal2: "" }, hl: ["bil"] },
    { hide: ["sceneA", "dieB", "bil"], show: ["pcb2", "ccL2", "gas2", "bil2", "ccS2", "labelsC"], txt: { pnote: "press · 18 MPa · 3 min" }, hl: ["bil2", "gas2"] },
    { hide: ["ccS2"], txt: { pnote: "" }, hl: ["bil2"] },
    { show: ["anodeCC"], hl: ["anodeCC"] },
    { hide: ["anodeCC"], show: ["ccS2b"], txt: { pnote: "press · 4 MPa · 2 min" }, hl: ["ccS2b"] },
    { show: ["plates2", "dims2"], txt: { pnote: "" }, hl: ["dims2"] },
    { hide: ["labelsC"], show: ["cycler", "leads2"], hl: ["leads2"] },
    { show: ["pc", "curve"], hl: ["pc"] }
  ]
};

/* ---------------- Anton Paar Monowave 400 R ---------------- */
window.DEMOS["monowave"] = {
  base: ["lid", "probe", "cora", "startBtnMw"],
  steps: [
    { show: ["air"], set: { lid: "rotate(-45deg)" }, hl: ["air"] },
    { show: ["vial", "liq"], txt: { vlbl: "G10 vial · 2–6 mL" }, hl: ["liq"] },
    { show: ["cap"], hl: ["cap"] },
    { txt: { scr2: "+ New: Standard", scr3: "Heat → T", scr4: "Hold  t", scr5: "Cool  ≤ bp−10", scr6: "Vial: G10" } },
    { set: { probe: "translate(-75px,0px)" }, hl: ["probe"] },
    { show: ["ring"], set: { vial: "translate(160px,84px)" }, txt: { vlbl: "" }, hl: ["ring", "vial"] },
    { set: { lid: "rotate(0deg)" }, hl: ["startBtnMw", "lid"] },
    { show: ["beam", "heat"], hl: ["cora", "beam"] },
    { txt: { scr2: "T  ▲  °C", scr3: "p  ▲  bar", scr4: "P   W", scr5: "stir rpm", scr6: "running" }, hl: ["heat"] },
    { hide: ["beam", "heat"], txt: { scr6: "cooling" }, hl: ["cora"] },
    { set: { lid: "rotate(-45deg)", vial: "translate(0px,0px)" }, txt: { vlbl: "open with capping tool", scr6: "done" }, hl: ["vial"] },
    { txt: { scr2: "Menu ▸ Data", scr3: "Browse Results", scr4: "Export: USB", scr5: ".pdf .csv", scr6: "" } }
  ]
};

/* ---------------- Anton Paar Cora 5001 ---------------- */
window.DEMOS["cora"] = {
  base: ["fprobe", "dlid", "screw"],
  steps: [
    { show: ["pwr"], txt: { cs1: "— warming up (~15 min) —" }, hl: ["pwr"] },
    { txt: { cs1: "Log in", cs2: "user / password" } },
    { show: ["dvial"], set: { dlid: "rotate(110deg)", dvial: "translate(0px,-110px)" }, txt: { cs1: "", cs2: "", vtxt: "sealed vial (filled in glovebox)" }, hl: ["dvial"] },
    { set: { fprobe: "translate(-40px,0px)", dvial: "translate(0px,0px)", dlid: "rotate(0deg)" }, txt: { vtxt: "" }, hl: ["screw", "fprobe", "dlid"] },
    { show: ["ready"], hl: ["ready"] },
    { show: ["focusplot", "laser"], set: { fprobe: "translate(0px,0px)" }, txt: { cs1: "Adjust Focus ▸ Start", cs2: "slide probe → max signal", cs3: "tighten screw ▸ Stop" }, hl: ["focusplot", "screw"] },
    { hide: ["focusplot", "laser"], txt: { cs1: "Single Measurement", cs2: "λ · laser power", cs3: "Auto Exposure ≤ 10 s" } },
    { txt: { cs1: "Advanced Settings", cs2: "background · average N", cs3: "spike removal (N ≥ 3)", cs4: "baseline correction" } },
    { show: ["measBtn", "laser", "spec"], txt: { cs1: "", cs2: "", cs3: "", cs4: "" }, hl: ["measBtn", "spec"] },
    { hide: ["laser", "ready"], txt: { cs1: "Export · Save as method" }, hl: ["fprobe"] },
    { hide: ["spec", "measBtn", "pwr"], set: { dlid: "rotate(110deg)", dvial: "translate(0px,-110px)" }, txt: { cs1: "— off —" }, hl: ["dvial"] }
  ]
};

/* ---------------- Fritsch Pulverisette 7 classic line ---------------- */
window.DEMOS["ball-mill"] = {
  base: ["tankAsm", "clamp", "spindles", "hood", "startB", "stopB"],
  steps: [
    { show: ["gb", "zpot"], set: { spindles: "translate(0px,-22px)" }, hl: ["zpot"] },
    { show: ["potlid"], hl: ["potlid"] },
    { show: ["tankBody", "spacers", "tankLid"], hl: ["spacers", "tankLid"] },
    { hide: ["gb"], show: ["mainsw"], set: { hood: "rotate(12deg)" }, hl: ["mainsw", "hood"] },
    { show: ["cork", "cw"], set: { tankAsm: "translate(225px,50px)" }, txt: { potlbl: "" }, hl: ["cork", "cw", "tankAsm"] },
    { set: { spindles: "translate(0px,0px)" }, hl: ["spindles", "clamp"] },
    { txt: { spd: "510" } },
    { txt: { tim: "MILL/PAUSE", timu: "", rep: "n" } },
    { set: { hood: "rotate(0deg)" }, show: ["spin"], hl: ["startB", "hood"] },
    { hide: ["spin"], set: { hood: "rotate(12deg)" }, txt: { timu: "pause" }, hl: ["spindles"] },
    { set: { hood: "rotate(12deg)", tankAsm: "translate(0px,0px)" }, show: ["gb"], hide: ["cw"], txt: { timu: "" }, hl: ["stopB", "tankAsm"] }
  ]
};

/* ---------------- Mettler Toledo C20S Karl Fischer ---------------- */
window.DEMOS["karl-fischer"] = {
  base: ["reag", "gen", "ind", "dry", "sept", "stir", "bal"],
  steps: [
    { show: ["plugs"], hl: ["plugs", "dry", "sept"] },
    { txt: { k1: "Home" } },
    { txt: { k1: "Methods ▸ New", k2: "Standard ▸ KF Coul", k3: "Sample: entry = Weight", k4: "Save · Add to Home" } },
    { txt: { k1: "Pretitration…", k2: "drift decreasing", k3: "", k4: "" }, hl: ["stir"] },
    { show: ["kfBtn"], txt: { k1: "Standby", k2: "drift low and stable" }, hl: ["kfBtn"] },
    { show: ["syr"], set: { syr: "translate(10px,104px)" }, txt: { balkf: "0.0000 g" }, hl: ["syr"] },
    { set: { syr: "translate(-64px,20px)" }, txt: { k1: "Add sample", k2: "", balkf: "" }, hl: ["syr", "sept"] },
    { set: { syr: "translate(10px,104px)" }, txt: { balkf: "−0.7512 g", k1: "Enter weight", k2: "0.7512 g" }, hl: ["bal"] },
    { hide: ["syr"], txt: { k1: "Result", k2: "", balkf: "", k5: "R1 ≈ 10 mg/g" } },
    { hide: ["kfBtn"], txt: { k1: "Stop analysis", k2: "More ▸ End series", k5: "" } }
  ]
};

/* ---------------- Hobersal muffle furnace (Fuji PXF4) ---------------- */
window.DEMOS["muffle-furnace"] = {
  base: [],
  steps: [
    { hl: [] },
    { show: ["swLed"], txt: { pv: "23", sv: "20" }, hl: ["swLed"] },
    { txt: { sv: "20" } },
    { txt: { par: "CH 3" } },
    { txt: { par: "PtN    0" } },
    { txt: { par: "tCMU   HHMM" } },
    { txt: { par: "SV-1   850" } },
    { show: ["r1"], txt: { par: "tM1r   02:46" }, hl: ["r1"] },
    { show: ["h1"], txt: { par: "tM1S   00:30" }, hl: ["h1"] },
    { show: ["r2"], txt: { par: "SV-2 20 · tM2r 06:55" }, hl: ["r2"] },
    { txt: { par: "SV-3…8 = 0 · 00:00" } },
    { show: ["amp"], txt: { par: "" }, hl: ["amp"] },
    { show: ["runInd", "glow"], txt: { par: "ProG   Run", sv: "850" } },
    { hide: ["runInd", "glow"], txt: { par: "ProG   off" } }
  ]
};

/* ---------------- Argolab drying oven ---------------- */
window.DEMOS["drying-oven"] = {
  base: ["door"],
  steps: [
    { show: ["nogo"], hl: ["nogo"] },
    { show: ["beep"], txt: { ot: "23" }, hl: ["beep"] },
    { hide: ["beep", "nogo"], txt: { op: "PROG 1 ▲▼" } },
    { txt: { op: "PROG 0 · edit", ot: "110", otm: "t 00:00", ofan: "" } },
    { txt: { op: "STEP 1 … STEP n", otm: "STEP n+1: 00:00", ofan: "fan H/M/L" } },
    { set: { door: "scaleX(0.12)" }, show: ["ware"] },
    { set: { door: "scaleX(1)" }, show: ["heatw"], txt: { op: "PROG 0 · RUN", otm: "", ofan: "" } },
    { hide: ["heatw"], set: { door: "scaleX(0.12)" }, txt: { op: "STOP" } }
  ]
};

/* ---------------- VersaStudio (PARSTAT MC / PMC-2000) ---------------- */
window.DEMOS["versastudio"] = {
  base: ["runB"],
  steps: [
    { txt: { vchan: "No Instrument" } },
    { show: ["dlgInst"], hl: ["dlgInst"] },
    { hide: ["dlgInst"], show: ["dlgChk"], txt: { vchan: "PMC CH 2" } },
    { hide: ["dlgChk"], show: ["dlgAct"] },
    { hide: ["dlgAct"], show: ["actions", "grid"], txt: { g1: "3E+6", g2: "0.1", g3: "10", g5: "10" }, hl: ["grid"] },
    { show: ["adv"], hl: ["adv"] },
    { show: ["dlgOpt"] },
    { hide: ["dlgOpt"], show: ["saveHl"] },
    { hide: ["saveHl"], show: ["nyqV"], hl: ["runB", "nyqV"] },
    { show: ["dlgExp"] },
    { hide: ["dlgExp"], txt: { vchan: "No Instrument" } }
  ]
};

/* ---------------- Neware BTS client ---------------- */
window.DEMOS["neware-bts"] = {
  base: [],
  steps: [
    { show: ["devSel"], hl: ["devSel"] },
    { txt: { ch1v: "OCV stable" } },
    { show: ["ctx"], hl: ["ctx"] },
    { hide: ["ctx"], show: ["steps"], hl: ["steps"] },
    { hide: ["steps"], show: ["startDlg"], hl: ["startDlg"] },
    { hide: ["startDlg"], show: ["ch1run"], txt: { ch1s: "working", ch1v: "CC_Chg · µA" }, hl: ["ch1run"] },
    { show: ["da"], hl: ["da"] },
    { hide: ["da", "ch1run"], txt: { ch1s: "finished", ch1v: "" } }
  ]
};
