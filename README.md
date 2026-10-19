# Lab Instrument Guides

A multilingual website (MkDocs Material, published on GitHub Pages) with:

- simple user guides for each instrument and test cell,
- an **animated step-by-step demonstration** in every guide (SVG + JavaScript, no video files),
- an **instrument booking** page backed by Google Calendar (see [`booking/README.md`](booking/README.md)),
- links to the **original manuals**,
- a language switcher for English, Español, Italiano, Deutsch, Français, Türkçe, 中文, 日本語 and 한국어.

## Run it locally

Always use the `ZACH-venv` virtual environment in the repository root:

```bash
python3 -m venv ZACH-venv              # first time only
ZACH-venv/bin/pip install -r requirements.txt
ZACH-venv/bin/mkdocs serve             # http://127.0.0.1:8000
```

(Windows: `ZACH-venv\Scripts\pip` and `ZACH-venv\Scripts\mkdocs`.)

Versions are pinned in `requirements.txt`. Material for MkDocs has announced that MkDocs 2.0 will break plugins and theme overrides, so do not upgrade `mkdocs` past 1.6.x without testing.

## Publish on GitHub Pages

1. Create an empty repository on GitHub (e.g. `instrument-guides`) and push this folder to its `main` branch.
2. In the repository: **Settings ▸ Pages ▸ Build and deployment ▸ Source: GitHub Actions**.
3. Edit `site_url` in `mkdocs.yml` to `https://<user>.github.io/instrument-guides/` (and `repo_url` if you like), commit and push.
4. The workflow in `.github/workflows/deploy.yml` builds the site (with `--strict`) and publishes it on every push to `main`.

## Project layout

```
mkdocs.yml                     site configuration, navigation, languages
overrides/main.html            "not yet translated / machine translation" banner
docs/                          English pages (the reference version)
docs/assets/demos/*.svg        drawings for the demonstrations
docs/assets/js/demos.js        animation steps for each demonstration
docs/assets/js/demo-player.js  the player
docs/assets/js/ui-strings.js   player and booking interface text in 9 languages
docs/assets/js/booking*.js     booking page (demo mode until apiUrl is set)
booking/apps-script/           Google Apps Script backend for bookings
REVIEW_NOTES.md                open questions found while writing the guides
```

## Adding a translation

Translations sit next to the English file with a language suffix, e.g. `docs/instruments/glovebox.es.md`. Pages without a translation fall back to English and show a notice.

1. Copy `glovebox.md` to `glovebox.es.md` and translate the text. **Keep the demonstration step list the same length and order** — the animation is matched to it item by item.
2. Add to the front matter: `translation: machine` (shows a "machine translation, not yet reviewed" notice) and change it to `translation: reviewed` once a native speaker has checked it.
3. Translate the navigation labels with `nav_translations` under that language in `mkdocs.yml`, and the SVG labels with `window.DEMO_LABELS` (keys are the `data-i18n` attributes in the SVGs).
4. Headings that other pages link to keep their English anchor, e.g. `## Demostración { #demonstration }`, so the same links work in every language.
5. Chinese, Japanese and Korean: run `ZACH-venv/bin/python tools/cjk_bold.py` after editing. It turns `**…**` / `*…*` into `<strong>`/`<em>`, because Markdown does not close bold before a CJK character (`**注意。**后面` would show the asterisks).
6. Check with `ZACH-venv/bin/python tools/check_translations.py` (step counts, demos, links, translation flag) and `ZACH-venv/bin/mkdocs build --strict`.

**Status (October 2026):** all 22 pages exist in all eight languages, every one marked `translation: machine`. Instrument screen words (Standby, Single start, Experiment ▸ New…) and document titles are left in English on purpose, so they match what users see on the instrument and in the manuals.

## Changing a demonstration

Each demonstration is an SVG in `docs/assets/demos/` plus an entry in `docs/assets/js/demos.js`. Elements with `class="part"` and an `id` can be shown, hidden, moved (`set`) or highlighted (`hl`) per step; `<text id="…">` can be changed (`txt`). See the comment at the top of `demo-player.js`. The number of entries in `demos.js` must equal the number of steps in the page's list (the browser console warns if not).

## Manuals

Vendor manuals are copyrighted, so they are **not** stored in this public repository (`*.pdf` is in `.gitignore`). The Manuals page links to official pages and to the lab's own copies (add the lab-drive link there).
