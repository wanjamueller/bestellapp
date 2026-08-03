
# 🍔 BurgerHome

A food delivery web app built with vanilla JavaScript — no frameworks, no build step, no dependencies.

**[→ Live Demo](https://wanjamueller.developerakademie.net/bestellapp/index.html)**

<!-- Add a screenshot here — drag an image into the GitHub issue editor to get a hosted URL -->
<img width="2862" height="1788" alt="screenshot" src="https://github.com/user-attachments/assets/21abdd4a-cad4-424b-8849-ed1e6c6b1003" />

---

## What it does

Browse a burger menu, add dishes to a basket, adjust quantities, and check out. The basket persists across page reloads, so a half-finished order survives closing the tab.

- **Dynamic menu** rendered from a JSON dataset
- **Live basket** with per-dish quantity controls and running total
- **Persistent state** via `localStorage`
- **Responsive layout** — sticky basket sidebar on desktop, slide-in overlay on mobile
- **German locale formatting** for prices (`8,99 €` via `Intl.NumberFormat`)
- **Accessible** — descriptive alt text on all menu images, keyboard-operable controls

---

## Built with

| | |
|---|---|
| **HTML5** | Semantic markup |
| **CSS3** | Flexbox, Grid, `clamp()` fluid typography, custom properties |
| **JavaScript (ES6+)** | Template functions, array methods, event handling |
| **Web Storage API** | `localStorage` for basket persistence |

No frameworks. No package manager. Open `index.html` and it runs.

---

## Project structure

```
bestellapp/
├── index.html          # Page shell and script includes
├── style.css           # Layout, responsive breakpoints, design tokens
├── js/
│   ├── db.js           # Menu dataset — dishes, prices, image paths
│   ├── templates.js    # HTML template functions (returns markup strings)
│   └── script.js       # App logic — rendering, basket, checkout
└── assets/
    └── img/            # Dish photography
```

The three-file JS split keeps concerns separated: **data** in `db.js`, **markup** in `templates.js`, **behaviour** in `script.js`.

---

## How it works

**Rendering** — Each dish is passed to a template function that returns an HTML string. The menu container's `innerHTML` is assigned once per render rather than appended in a loop, so the browser parses the markup a single time.

```javascript
function renderMenu() {
  let html = "";
  for (const dish of dishes) {
    html += dishTemplate(dish);
  }
  document.getElementById('menu').innerHTML = html;
}
```

**Basket state** — There's no separate basket array. Every dish carries an `amount` property, and the basket is a derived view:

```javascript
const basket = dishes.filter((dish) => dish.amount > 0);
```

One source of truth, no synchronisation bugs between two lists.

**Persistence** — After every mutation, `dishes` is serialised to `localStorage`. On load, the stored version is restored if present; otherwise the seed data in `db.js` is used.

**Price formatting** — A single `Intl.NumberFormat` instance is created once and reused across renders, rather than calling `toLocaleString()` per row.

---

## Running locally

```bash
git clone https://github.com/<your-username>/bestellapp.git
cd bestellapp
```

Open `index.html` in a browser, or serve it with any static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## What I learned

This project was about working without a framework long enough to understand what frameworks actually solve. Rendering from state by hand makes the cost of a re-render visible. Managing DOM ids across template and logic files makes you appreciate why component scoping exists.

Specific things that took real debugging: event delegation on dynamically rendered elements, `z-index` stacking contexts on the mobile basket overlay, scroll-locking the body while a modal is open (including the iOS Safari workaround), and floating-point rounding in currency totals.

---

## Roadmap

- [ ] Order form with validation
- [ ] Category filtering
- [ ] Delivery vs. pickup toggle
- [ ] Migrate to ES modules

---

## About

Built as part of my transition from operations and product leadership into software engineering.

**Wanja Mueller** · Berlin
[GitHub](https://github.com/<your-username>) · [LinkedIn](https://linkedin.com/in/<your-profile>)
