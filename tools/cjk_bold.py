"""Convert **bold** / *italic* to <strong>/<em> in CJK pages.

pymdownx.betterem only closes ** at a word boundary, so '**注意。**后面' stays literal.
Run on *.zh.md / *.ja.md / *.ko.md after editing. Skips front matter and code fences.
"""
import re, sys, pathlib

BOLD = re.compile(r"\*\*(?=\S)(.+?)(?<=\S)\*\*")
EM = re.compile(r"(?<![*A-Za-z0-9])\*(?=[^\s*])([^*]+?)(?<=[^\s*])\*(?![*A-Za-z0-9])")

def fix(path):
    lines = path.read_text(encoding="utf-8").split("\n")
    out, fm, code = [], 0, False
    for i, ln in enumerate(lines):
        if i == 0 and ln == "---":
            fm = 1; out.append(ln); continue
        if fm == 1:
            if ln == "---":
                fm = 2
            out.append(ln); continue
        if ln.lstrip().startswith("```"):
            code = not code
        out.append(ln if code else EM.sub(r"<em>\1</em>", BOLD.sub(r"<strong>\1</strong>", ln)))
    new = "\n".join(out)
    if new != path.read_text(encoding="utf-8"):
        path.write_text(new, encoding="utf-8")
        return True
    return False

if __name__ == "__main__":
    langs = sys.argv[1:] or ["zh", "ja", "ko"]
    n = 0
    for lang in langs:
        for p in pathlib.Path("docs").rglob(f"*.{lang}.md"):
            n += fix(p)
    print("files changed:", n)
