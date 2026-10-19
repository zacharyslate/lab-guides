"""Printable QR labels for the lab instruments.

Usage:  ZACH-venv/bin/python tools/make_qr_labels.py [outdir]

Writes two A4 PDFs (3 x 5 labels, 63 x 52 mm each, cut along the grey lines):
  qr-labels-main.pdf        every QR opens the main page of the site
  qr-labels-instrument.pdf  every QR opens that instrument's own guide
Each QR is checked by decoding it again (pyzbar) before the sheet is saved.
"""
import sys
from pathlib import Path

import segno
from PIL import Image, ImageDraw, ImageFont

SITE = "https://zacharyslate.github.io/lab-guides/"
INSTRUMENTS = [  # (label, sub-label, page)
    ("MBraun EasyLab", "Glovebox", "instruments/glovebox/"),
    ("Büchi R-210", "Rotavapor", "instruments/rotavapor/"),
    ("PARSTAT MC · PMC-2000", "Potentiostat / EIS", "instruments/potentiostat/"),
    ("Neware CT-9008", "Battery cycler", "instruments/battery-cyclers/"),
    ("Neware CT-5008", "Battery cycler", "instruments/battery-cyclers/"),
    ("Neware CT-4008Q", "Battery cycler", "instruments/battery-cyclers/"),
    ("Neware CT-4008T", "Battery cycler", "instruments/battery-cyclers/"),
    ("Anton Paar Monowave 400 R", "Microwave reactor", "instruments/monowave/"),
    ("Anton Paar Cora 5001", "Raman spectrometer", "instruments/cora/"),
    ("Fritsch Pulverisette 7", "Planetary ball mill", "instruments/ball-mill/"),
    ("Mettler Toledo C20S", "Karl Fischer titrator", "instruments/karl-fischer/"),
    ("Hobersal muffle furnace", "Furnace", "instruments/muffle-furnace/"),
    ("Argolab drying oven", "Oven", "instruments/drying-oven/"),
]

DPI = 300
MM = DPI / 25.4
A4 = (round(210 * MM), round(297 * MM))
COLS, ROWS = 3, 5
LW, LH = 63 * MM, 52 * MM
X0 = (A4[0] - COLS * LW) / 2
Y0 = (A4[1] - ROWS * LH) / 2
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_B = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"


def qr_image(url, size_px):
    q = segno.make(url, error="q", micro=False)
    scale = max(1, int(size_px // (q.symbol_size(border=2)[0])))
    from io import BytesIO
    buf = BytesIO()
    q.save(buf, kind="png", scale=scale, border=2)
    buf.seek(0)
    img = Image.open(buf).convert("L")
    return img.resize((int(size_px), int(size_px)), Image.NEAREST)


def check(img, url):
    try:
        from pyzbar.pyzbar import decode
    except Exception as e:  # zbar not installed: say so instead of claiming success
        print("  (decode check skipped:", e, ")")
        return
    got = [d.data.decode() for d in decode(img)]
    assert got == [url], (got, url)


def fit(draw, text, font_path, size, width):
    while size > 14:
        f = ImageFont.truetype(font_path, size)
        if draw.textlength(text, font=f) <= width:
            return f
        size -= 2
    return ImageFont.truetype(font_path, size)


def sheet(per_instrument, out):
    page = Image.new("L", A4, 255)
    d = ImageDraw.Draw(page)
    for i, (name, sub, path) in enumerate(INSTRUMENTS):
        c, r = i % COLS, i // COLS
        x, y = X0 + c * LW, Y0 + r * LH
        d.rectangle([x, y, x + LW, y + LH], outline=190, width=2)  # cut line
        url = SITE + path if per_instrument else SITE
        qs = 34 * MM
        img = qr_image(url, qs)
        check(img, url)
        page.paste(img, (int(x + (LW - qs) / 2), int(y + 3 * MM)))
        ty = y + 3 * MM + qs + 1.2 * MM
        f1 = fit(d, name, FONT_B, 40, LW - 6 * MM)
        d.text((x + LW / 2, ty), name, font=f1, fill=0, anchor="ma")
        f2 = fit(d, sub + " · guide & booking", FONT, 30, LW - 6 * MM)
        d.text((x + LW / 2, ty + 5.4 * MM), sub + " · guide & booking", font=f2, fill=60, anchor="ma")
        f3 = ImageFont.truetype(FONT, 22)
        d.text((x + LW / 2, ty + 9.6 * MM), url.replace("https://", ""), font=fit(d, url.replace("https://", ""), FONT, 22, LW - 4 * MM), fill=110, anchor="ma")
    page.save(out, "PDF", resolution=DPI)
    print("wrote", out)


if __name__ == "__main__":
    outdir = Path(sys.argv[1] if len(sys.argv) > 1 else ".")
    outdir.mkdir(parents=True, exist_ok=True)
    sheet(False, outdir / "qr-labels-main.pdf")
    sheet(True, outdir / "qr-labels-instrument.pdf")
