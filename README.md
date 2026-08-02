# Portfolio

Statyczna strona portfolio: HTML + CSS + JS, bez buildu, bez zależności.

## Struktura

- `index.html` — strona główna: hero, skille, projekty (link + opis zamiast zdjęcia), kontakt
- `cv.html` — gotowy szablon CV do wypełnienia (przyciski `[w nawiasach]` do podmiany)
- `style.css` — style głównej strony
- `cv.css` — dodatkowe style dla CV (w tym wersja do druku/PDF)
- `script.js` — drobne interakcje (rok w stopce, podświetlenie aktywnej sekcji w nav)

## Jak wgrać na GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<twoj-login>/portfolio.git
git push -u origin main
```

## Jak włączyć darmowy hosting (GitHub Pages)

1. Wejdź w repo na GitHub → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Zapisz — strona pojawi się pod adresem:
   `https://<twoj-login>.github.io/portfolio/`

## Co warto podmienić przed publikacją

- Linki `href="#"` przy każdym projekcie → prawdziwe linki (ArtStation, YouTube, itch.io, repo)
- Dane kontaktowe w `index.html` (`#contact`) i `cv.html` (mail, LinkedIn, ArtStation, GitHub)
- Treść `[w nawiasach]` w `cv.html` — daty, nazwy stanowisk, konkretne osiągnięcia
