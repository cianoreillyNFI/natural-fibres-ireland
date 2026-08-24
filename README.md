# Natural Fibres Ireland — site improvement bundle

Reviewed 24 August 2026 against the live site.

## What's in here

```
css/nfi.css              One design system to replace the two currently in use
index.html               Rewritten homepage (new copy + the chain graphic)
partials/header.html     Canonical header — paste into EVERY page
partials/footer.html     Canonical footer — paste into EVERY page
CONTENT-FIXES.md         The audit: what reads as AI-generated and why
README.md                This file
```

Read `CONTENT-FIXES.md` first. The design files are the smaller half of the fix.

## Installing

This is a static site, so there's no build step.

**Note on the zip:** GitHub doesn't unpack zip archives — if you upload it as-is it
just sits in the repo as a binary blob. Extract it locally first, then commit the
files. Either drag them into the GitHub web uploader, or:

```bash
unzip nfi-improvements.zip
cp -r nfi-improvements/css nfi-improvements/partials .
cp nfi-improvements/index.html ./index-new.html   # compare before overwriting
git add . && git commit -m "Unify design system, rewrite homepage"
git push
```

Keep the old `index.html` around until you've compared them side by side.

### On every page

1. Add the stylesheet and fonts to `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/nfi.css">
```

2. Remove the old per-page `<style>` blocks and stylesheet links.
3. Set `<meta name="theme-color" content="#1e4032">` — the site currently ships two
   different values.
4. Paste in `partials/header.html` and `partials/footer.html`.
5. On each page set `aria-current="page"` on the matching nav link, and remove it
   from the others.

### Before every deploy

```bash
grep -rn "todo-fill" --include="*.html" .
```

Should return nothing. The placeholder style is deliberately loud yellow so it can't
ship unnoticed, but check anyway.

## Things I couldn't do from outside

- I only fetched `index.html`, `programme.html` and `hemp-licence-ireland/`. I have
  not seen `fibres.html`, `farmers/`, `collaborate.html`, `about.html` or
  `privacy.html`, so the CSS may need small additions for components on those pages.
- The six chain stages in `index.html` are **plausible guesses**. Verify all six
  before publishing — see section 4 of `CONTENT-FIXES.md`.
- The `todo-fill` block asking who runs this is the most important thing on the page
  and only you can write it.

## Accessibility floor

Already handled in the CSS, please don't remove: visible keyboard focus rings,
a skip link, `prefers-reduced-motion` respected, and colour contrast checked against
WCAG AA for body text on both the linen and field backgrounds.
