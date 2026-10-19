"""Check translated pages against the English originals.

For every docs/**/<page>.<lang>.md this checks that:
  * the front matter declares `translation: machine` or `translation: reviewed`;
  * every demonstration step list has the same number of steps as English
    (the animation is matched to the list item by item);
  * the same demonstrations and SVG snippets are embedded;
  * the same link targets are used (translated pages must point to the same pages/anchors).

Run with the project virtual environment:  ZACH-venv/bin/python tools/check_translations.py
It also prints, per language, which English pages are still untranslated.
"""
import pathlib
import re
import sys

DOCS = pathlib.Path(__file__).resolve().parent.parent / "docs"
LANGS = ["es", "it", "de", "fr", "tr", "zh", "ja", "ko"]


def step_counts(text):
    counts = []
    for block in re.findall(r'<div class="demo-steps" markdown>(.*?)</div>', text, re.S):
        counts.append(len(re.findall(r"^\d+\.\s", block, re.M)))
    return counts


def links(text):
    return sorted(set(re.findall(r"\]\(([^)\s]+)\)", text)))


def main():
    problems = 0
    english = [p for p in DOCS.rglob("*.md") if not re.search(r"\.[a-z]{2}\.md$", p.name)]
    for lang in LANGS:
        missing = []
        for en in sorted(english):
            tr = en.with_name(en.stem + f".{lang}.md")
            rel = en.relative_to(DOCS)
            if not tr.exists():
                missing.append(str(rel))
                continue
            a, b = en.read_text(encoding="utf-8"), tr.read_text(encoding="utf-8")
            errs = []
            if not re.search(r"^translation:\s*(machine|reviewed)\s*$", b, re.M):
                errs.append("front matter lacks 'translation: machine|reviewed'")
            if step_counts(a) != step_counts(b):
                errs.append(f"demo steps {step_counts(b)} != English {step_counts(a)}")
            if re.findall(r'data-demo="([^"]+)"', a) != re.findall(r'data-demo="([^"]+)"', b):
                errs.append("different demonstrations embedded")
            if re.findall(r'--8<-- "([^"]+)"', a) != re.findall(r'--8<-- "([^"]+)"', b):
                errs.append("different SVG snippets")
            if links(a) != links(b):
                errs.append(f"links differ: only EN {sorted(set(links(a)) - set(links(b)))}, only {lang} {sorted(set(links(b)) - set(links(a)))}")
            for e in errs:
                print(f"[{lang}] {rel}: {e}")
            problems += len(errs)
        print(f"[{lang}] untranslated: {len(missing)}" + (f" — {', '.join(missing)}" if missing else ""))
    print("OK" if not problems else f"{problems} problem(s)")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
