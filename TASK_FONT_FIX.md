Fix font rendering and layout clipping issues on the MoodSketch website.

## Context
Site: https://sketchkit.app/moodsketch (Astro + Tailwind, deployed on Vercel)
Local path: ~/Projects/moodsketch-site/
Issue: Fonts look wonky, text cut off in multiple places across the site.

## What to do
1. Review all pages and components in src/ for layout/font issues
2. Look for: overflow:hidden cutting text, missing font fallbacks, incorrect line-height or letter-spacing, container width issues, font-size clipping on mobile
3. Fix any issues found — prioritize visible text cutoff first
4. Test that changes look correct by reviewing the HTML/CSS carefully
5. Commit all changes with message: "fix: font rendering and layout clipping issues"
6. Deploy to Vercel via API:
   curl -s -X POST "https://api.vercel.com/v13/deployments" \
     -H "Authorization: Bearer [REDACTED]" \
     -H "Content-Type: application/json" \
     -d '{"name":"sketchkit-website","gitSource":{"type":"github","repoId":"your-repo-id","ref":"main"}}'

   Actually: just push to git and it may auto-deploy, OR trigger via Vercel API after push.

When completely finished, run:
openclaw system event --text "Done: MoodSketch website font/layout fix complete" --mode now
