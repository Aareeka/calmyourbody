# calmyourbody

A holistic wellness content site: curated remedy articles with affiliate
product links, plus a symptom search bar that retrieves from that curated
content (no free-form AI generation of medical advice — this matters for
both safety and credibility).

## Stack

- Next.js 14 (App Router)
- Markdown content with frontmatter (`gray-matter`) — no database needed yet
- Plain CSS (design tokens in `styles/globals.css`)

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  page.js                  → Home page (hero + search bar + featured remedies)
  remedies/page.js         → Index of all remedies
  remedies/[slug]/page.js  → Individual remedy article page
  about/page.js
  disclaimer/page.js       → Medical + affiliate disclaimer (important — keep this current)
  api/search/route.js      → Search endpoint the search bar calls

components/
  SearchBar.js              → Client-side search input + results

content/remedies/*.md       → Your actual content lives here. Each file = one
                               remedy article with structured frontmatter.

lib/remedies.js              → Reads/parses content, powers search.
                               searchRemediesByQuery() is the function an AI
                               layer would eventually call into for smarter
                               matching — keep it as the single source of truth.
```

## Adding a new remedy article

Create a new file in `content/remedies/`, e.g. `content/remedies/anxiety.md`:

```markdown
---
title: "Holistic Approaches to Anxiety"
slug: "anxiety"
category: "Sleep & Stress"
symptoms: ["anxiety", "anxious", "stress", "racing thoughts"]
summary: "One sentence summary for cards and search results."
lastUpdated: "2026-07-01"
remedies:
  - name: "Remedy Name"
    description: "Why this helps, written plainly."
    affiliateProductName: "Product Name"
    affiliateLink: "https://your-affiliate-link.com"
---

Body content here. Always include a "When to see a doctor" note.
```

The page, search index, and homepage card all pick this up automatically —
no other code changes needed.

## Deploying

This is built for [Vercel](https://vercel.com) (same company as Next.js,
free tier is enough to start):

1. Push this folder to a GitHub repo
2. Import the repo in Vercel
3. Point your `calmyourbody` domain at the Vercel deployment (Vercel gives
   you exact DNS instructions once you add the domain in project settings)

## Roadmap (per our plan)

1. ✅ Site skeleton + content schema (this scaffold)
2. Write 10-15 more articles in `content/remedies/` covering common
   symptoms (back pain, fatigue, nausea, sore throat, etc.)
3. Sign up for affiliate programs (Amazon Associates is fastest to get
   approved; wellness-brand affiliate programs often pay better — iHerb,
   Thrive Market, etc.) and swap in real `affiliateLink` values
4. Once there's a real content base, layer in a smarter AI search
   (retrieval-only against this same content — not free-generation) to
   replace the current simple keyword match in `lib/remedies.js`
5. Add basic analytics (Vercel Analytics or Plausible) to see which
   symptom searches are most common — that tells you what to write next

## Legal note

Keep `/disclaimer` accurate and visible. This kind of content sits close to
medical advice, so disclaimers, "consult a doctor" language, and avoiding
specific diagnostic claims matter more than on a typical content site.
