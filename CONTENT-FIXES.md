# Does it look AI-generated? Yes — but only in some places

An honest audit of naturalfibresireland.ie, reviewed 24 August 2026.

The short version: **the hemp licence guide does not read as generated at all. The
homepage and programme page do.** Understanding why is the whole fix, because it
turns out to have almost nothing to do with design.

---

## 1. What gives it away

### 1.1 Every heading has the identical rhetorical shape

Pulled verbatim from the live site:

- "Enable Ireland to make more from its own fibres."
- "Ireland has the raw material. The missing piece is the value chain."
- "A place to connect good ideas with the people who can move them forward."
- "Principles for building a credible fibre economy."
- "A fibre sector only works when the whole chain works."
- "Use official evidence. Date the claims."
- "Make Irish fibre a practical material choice."
- "Build the infrastructure around the material."
- "From sector intelligence to commercial adoption."
- "Start small. Build proof. Create the network."
- "Natural Fibres Ireland should make other organisations more effective."

Eleven headings. Every one is a complete declarative sentence ending in a full stop,
sitting under a small lowercase eyebrow label. No questions. No fragments. No headings
that are just a noun. Human writers are not this consistent across a whole site — they
get bored, or run out of steam on page four, or make a joke.

**Fix:** vary the shapes deliberately. Roughly one in three should be a question, one in
three a fragment or plain noun, one in three a full sentence. Delete the eyebrow from
most sections — keep it on two or three per page at most.

### 1.2 The triplet cadence

"Start small. Build proof. Create the network."
"Field → Factory → Future."
"Use official evidence. Date the claims."

Short declarative fragments in twos and threes, repeatedly. It reads as rhythmic rather
than as someone talking. Break at least half of these into ordinary sentences.

### 1.3 Suspiciously perfect symmetry

The programme page has six workstreams. Each has exactly five bullets. Thirty bullets,
all the same length and register.

Real programmes are lumpy. One workstream is enormous because it is where the work
actually is; another is two lines because it barely exists yet. **Make it uneven.** If
"Map" is where you are spending your time, give it nine bullets and give "Scale" two.

### 1.4 The numbering doesn't encode anything

`01 · Map / 02 · Process / 03 · Engineer / 04 · Prove / 05 · Equip / 06 · Scale`

Numbered markers are only meaningful when order carries information — a real sequence,
a timeline. These six run in parallel; you are not going to finish mapping before you
start engineering. So the numbers are decoration, and decoration that mimics structure
is a reliable generated-content signal.

**Fix:** drop the numbers, or replace them with something true — a status
(`ACTIVE` / `SCOPING` / `NOT STARTED`) or a date. Status labels would also quietly solve
problem 2 below.

### 1.5 Five principles nobody could disagree with

"Commercial reality. Whole-chain thinking. Regional value creation. Evidence before
claims. Open collaboration."

Try inverting each one. Would any organisation publish "we ignore commercial reality"?
No. Unfalsifiable positioning is cheap to generate and carries no information, so
readers discount it automatically.

**Fix:** keep at most two, and make them ones a reasonable person could actually
disagree with. "Natural does not automatically mean sustainable" is the good one — it
has an edge and it costs you something. Lead with it. Bin the rest.

---

## 2. The real problem, which is not a design problem

**Nothing on the homepage or programme page is checkable.**

Across both pages there is not a single number, date, place name, person, partner,
photograph of anything that happened, or event. Everything is future-conditional:
*should* establish, *would* help, *aim* to connect. A reader finishes and still cannot
answer: who is this, when did it start, has anything happened, why should I email them?

That absence is what makes it feel generated. Not the fonts.

And here is the proof, from your own site: **the hemp licence guide reads as
unmistakably human.** It has a review date and a scheduled next review. It cites DAFM's
statement of 8 July 2026. It names the 0.3% THC threshold and flags that older Irish
pages still say 0.2%. It reports roughly 11 hectares through BISS in 2026. It links a
specific Oireachtas PDF. And it admits a limit — that you looked for a committee report
and didn't find one.

That last line is the most human sentence on the entire website. Generated content
almost never says "we looked and couldn't find it."

So you already know how to write pages that don't read as AI. You did it once. The rest
of the site just hasn't caught up.

**Highest-leverage change, by a distance:** put a name, a start date, and one thing that
has actually happened on the homepage. That alone will do more than every CSS change in
this bundle.

---

## 3. Three navigations and two logos

Not a style question — a straightforward bug, and the fastest fix here.

| Page | Nav items | Logo | theme-color |
|---|---|---|---|
| `index.html` | Mission, Fibres, Farmers, Programme, Resources, Get involved | `nfi-logo.png` | `#123c2a` |
| `hemp-licence-ireland/` | as above **plus About** | `nfi-logo.png` | `#123c2a` |
| `programme.html` | Home, Mission, Fibres, Programme, Collaborate, Get involved | `assets/logo-mark.svg` | `#173d31` |

Also:

- `programme.html` links to `/mission.html`; `index.html` treats itself as Mission. So
  either there is a duplicate mission page or a dead link. Pick one.
- `programme.html` carries a tagline — "Field → Factory → Future" — that appears nowhere
  else on the site.
- `programme.html` footer renders `©  Natural Fibres Ireland` with **no year**. A
  template variable that never got filled. `index.html` says `© 2026`.
- URL conventions are mixed: `/farmers/` and `/hemp-licence-ireland/` are directories,
  `fibres.html` and `programme.html` are files. Harmless but it looks unconsidered.

This is the signature of a site assembled across several separate sessions and never
reconciled. Paste `partials/header.html` and `partials/footer.html` into every page and
it's gone.

---

## 4. Design direction in this bundle

The current look — institutional green on white — is the default for every sector body
and NGO in Europe. It is not offensive, it is just not *yours*.

`css/nfi.css` shifts the palette so it comes from the material rather than from the
category:

| Token | Hex | What it is |
|---|---|---|
| `--bog` | `#14201a` | near-black with a green cast, for text |
| `--field` | `#1e4032` | your existing green, cleaned up |
| `--flax` | `#c9a961` | retted flax straw / hemp shive — the only accent |
| `--linen` | `#efebe1` | unbleached ground, warmer than white |
| `--wool` | `#8d887c` | greasy wool grey, for rules and secondary text |

Type is **Archivo** (utilitarian, signage-like, not Inter) with **IBM Plex Mono** for
dates, sources and data. The mono is doing a job, not decorating: it marks everything
that is a dated, checkable claim. Your own principle — "date the claims" — becomes
visible in the typography.

**The signature element is the chain graphic.** Six links across the page, solid where
Irish capacity exists and hatched where it doesn't. It states your argument as a picture
instead of a paragraph, and it is the one thing on the site nobody else could paste into
theirs.

It only works if you're honest with it. For every solid stage you should be able to name
an Irish organisation doing that thing; for every gap, what the nearest alternative is
and what it costs. **I've filled it in with plausible guesses — you must verify all six
before publishing.** Then date it, like you dated the hemp guide.

---

## 5. Do this in order

1. **Paste the shared header and footer into every page.** One hour. Removes the
   strongest structural tell.
2. **Load `css/nfi.css` on every page and delete the old per-page styles.** Check the
   hemp guide carefully afterwards — it has components the other pages don't.
3. **Write the "who's behind this" block.** A name, a start date, one thing that has
   happened. This is the one that matters.
4. **Verify or correct the six chain stages.** Then date the graphic.
5. **Rewrite the eleven headings** using the shape-variation rule in 1.1.
6. **Make the programme page uneven** — different bullet counts, status labels instead
   of `01 · 02 · 03`.
7. **Cut the five principles to two.** Keep "natural does not automatically mean
   sustainable."
8. **Search the repo for `todo-fill` before every deploy.** The placeholder style is
   deliberately loud so it can't ship by accident.

---

## 6. One thing worth protecting

Don't let a redesign bury the hemp licence guide. It is genuinely useful, it is the
page most likely to be found in search, and it is the reason a grower would trust you
with their tonnage figures.

If anything, it should be more prominent — it's the proof that this organisation does
real work, and no amount of homepage polish substitutes for that.
