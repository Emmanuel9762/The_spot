# The Spot — Sterkspruit

A responsive, dependency-free website for The Spot bar and eatery in Sterkspruit, Eastern Cape.

## Preview

From the repository directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/.

## Publishing

The public address is https://emmanuel9762.github.io/The_spot/.
Publish the `master` branch from the repository root in GitHub Pages. `.nojekyll` keeps the site as plain static files. There is no installation or build step. All asset paths work under the `/The_spot/` project path.

## Content

- `index.html`: venue copy, two signature cocktails, events, food-menu information and Maps search.
- `styles.css`: responsive styling, visible keyboard focus and reduced-motion support.
- `js/site.js`: mobile navigation and flavour-based drink selection.
- `assets/`: original supplied images.

The redesign uses the existing venue identity and cocktail recipes. Legacy prices, promotions, opening hours and the placeholder street address have not been republished because their accuracy is unconfirmed. Add confirmed event dates, menu prices, contact information, opening hours and a precise Maps listing when available. The Maps link currently searches for the venue by name and town.

No booking form or online ordering service is connected. The page does not collect visitor information or include analytics.

Older `css/`, `partials/`, and JavaScript modules are preserved for reference but are no longer loaded by the page.
