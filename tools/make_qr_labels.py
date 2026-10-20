"""Printable QR labels for the lab instruments (vector PDFs).

Usage:  ZACH-venv/bin/python tools/make_qr_labels.py [outdir]
        (default outdir: docs/assets/qr, which the website links to)

Needs: segno, reportlab (and pyzbar + pdftoppm for the decode check).

Writes
  qr-labels-main.pdf          A4 sheet, 3 x 5 labels; every code opens the home page
  qr-labels-instrument.pdf    A4 sheet; every code opens that instrument's guide
  label-<id>.pdf              one 63 x 52 mm label, code opens the instrument's guide
  label-<id>-home.pdf         one 63 x 52 mm label, code opens the home page
Every code is decoded again from a rendering of the finished PDF before the
script reports success.
"""
import subprocess
import sys
import tempfile
from pathlib import Path

import segno
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.pdfgen.canvas import FILL_NON_ZERO

SITE = "https://zacharyslate.github.io/lab-guides/"
INSTRUMENTS = [  # (id, label, sub-label, page)
    ("glovebox", "MBraun EasyLab", "Glovebox", "instruments/glovebox/"),
    ("rotavapor", "Büchi R-210", "Rotavapor", "instruments/rotavapor/"),
    ("pmc", "PARSTAT MC · PMC-2000", "Potentiostat / EIS", "instruments/potentiostat/"),
    ("ct9008", "Neware CT-9008", "Battery cycler", "instruments/battery-cyclers/"),
    ("ct5008", "Neware CT-5008", "Battery cycler", "instruments/battery-cyclers/"),
    ("ct4008", "Neware CT-4008Q", "Battery cycler", "instruments/battery-cyclers/"),
    ("ct4008t", "Neware CT-4008T", "Battery cycler", "instruments/battery-cyclers/"),
    ("monowave", "Anton Paar Monowave 400 R", "Microwave reactor", "instruments/monowave/"),
    ("cora", "Anton Paar Cora 5001", "Raman spectrometer", "instruments/cora/"),
    ("ballmill", "Fritsch Pulverisette 7", "Planetary ball mill", "instruments/ball-mill/"),
    ("kf", "Mettler Toledo C20S", "Karl Fischer titrator", "instruments/karl-fischer/"),
    ("furnace", "Hobersal muffle furnace", "Furnace", "instruments/muffle-furnace/"),
    ("oven", "Argolab drying oven", "Oven", "instruments/drying-oven/"),
]
LW, LH = 63 * mm, 52 * mm
A4W, A4H = 210 * mm, 297 * mm
COLS, ROWS = 3, 5
QR = 34 * mm

pdfmetrics.registerFont(TTFont("DV", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DVB", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))


def fit(c, text, font, size, width):
    while size > 5 and c.stringWidth(text, font, size) > width:
        size -= 0.25
    return size


def draw_qr(c, url, x, y, size):
    """Vector QR, quiet zone of 2 modules included in `size`; (x, y) = lower-left."""
    q = segno.make(url, error="q", micro=False)
    rows = list(q.matrix_iter(border=2))
    n = len(rows)
    m = size / n
    c.setFillGray(0)
    path = c.beginPath()
    e = m * 0.04  # tiny overlap so renderers leave no hairline seams between modules
    for r, row in enumerate(rows):
        col = 0
        while col < n:
            if row[col]:
                start = col
                while col < n and row[col]:
                    col += 1
                path.rect(x + start * m - e, y + (n - 1 - r) * m - e, (col - start) * m + 2 * e, m + 2 * e)
            else:
                col += 1
    c.drawPath(path, stroke=0, fill=1, fillMode=FILL_NON_ZERO)


def draw_label(c, x, y, name, sub, url, cut=True):
    if cut:
        c.setStrokeGray(0.75)
        c.setLineWidth(0.4)
        c.rect(x, y, LW, LH, stroke=1, fill=0)
    draw_qr(c, url, x + (LW - QR) / 2, y + LH - 3 * mm - QR, QR)
    w = LW - 6 * mm
    ty = y + LH - 3 * mm - QR - 4.6 * mm
    c.setFillGray(0)
    s = fit(c, name, "DVB", 9.5, w)
    c.setFont("DVB", s)
    c.drawCentredString(x + LW / 2, ty, name)
    line2 = sub + " · guide & booking"
    c.setFillGray(0.25)
    s = fit(c, line2, "DV", 7.5, w)
    c.setFont("DV", s)
    c.drawCentredString(x + LW / 2, ty - 4.2 * mm, line2)
    short = url.replace("https://", "")
    c.setFillGray(0.45)
    s = fit(c, short, "DV", 5.6, LW - 4 * mm)
    c.setFont("DV", s)
    c.drawCentredString(x + LW / 2, ty - 7.6 * mm, short)


def sheet(per_instrument, out):
    c = canvas.Canvas(str(out), pagesize=(A4W, A4H))
    c.setTitle("Lab instrument QR labels")
    x0, y0 = (A4W - COLS * LW) / 2, (A4H - ROWS * LH) / 2
    for i, (iid, name, sub, page) in enumerate(INSTRUMENTS):
        col, row = i % COLS, i // COLS
        draw_label(c, x0 + col * LW, A4H - y0 - (row + 1) * LH, name, sub, SITE + page if per_instrument else SITE)
    c.setFont("DV", 7)
    c.setFillGray(0.4)
    c.drawString(x0, y0 / 2, "Print at 100 % (\"Actual size\"), cut along the grey lines. Each label is 63 × 52 mm.")
    c.save()


def single(iid, name, sub, url, out):
    c = canvas.Canvas(str(out), pagesize=(LW, LH))
    c.setTitle(name + " — QR label")
    draw_label(c, 0, 0, name, sub, url, cut=False)
    c.save()


def check(pdf, expected):
    """Render the PDF and decode every QR on it; compare with the expected URLs."""
    from PIL import Image
    from pyzbar.pyzbar import decode
    with tempfile.TemporaryDirectory() as td:
        subprocess.run(["pdftoppm", "-r", "200", "-png", str(pdf), f"{td}/p"], check=True)
        got = []
        for png in sorted(Path(td).glob("p*.png")):
            got += [d.data.decode() for d in decode(Image.open(png))]
    assert sorted(got) == sorted(expected), (pdf, sorted(got), sorted(expected))


if __name__ == "__main__":
    outdir = Path(sys.argv[1] if len(sys.argv) > 1 else "docs/assets/qr")
    outdir.mkdir(parents=True, exist_ok=True)
    sheet(False, outdir / "qr-labels-main.pdf")
    check(outdir / "qr-labels-main.pdf", [SITE] * len(INSTRUMENTS))
    sheet(True, outdir / "qr-labels-instrument.pdf")
    check(outdir / "qr-labels-instrument.pdf", [SITE + p for _, _, _, p in INSTRUMENTS])
    for iid, name, sub, page in INSTRUMENTS:
        single(iid, name, sub, SITE + page, outdir / f"label-{iid}.pdf")
        check(outdir / f"label-{iid}.pdf", [SITE + page])
        single(iid, name, sub, SITE, outdir / f"label-{iid}-home.pdf")
        check(outdir / f"label-{iid}-home.pdf", [SITE])
    print("wrote and verified", 2 + 2 * len(INSTRUMENTS), "PDFs in", outdir)
