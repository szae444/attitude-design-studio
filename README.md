# Attitude Design Studio: one-page site

Astro 5 (static) + GSAP + Lenis. Monochrome; client work turns full colour on hover.

## Run
    npm install
    npm run dev       # http://localhost:4321
    npm run build     # outputs static files to dist/

## Structure
    src/
      pages/index.astro          page = ordered list of sections
      layouts/Base.astro         <head>, fonts, grain overlay
      components/
        sections/                one file per section (markup + scoped styles)
          Nav · Hero · Clients · About · Services · Work · Packages · Studio · Why · Contact · Footer
        ui/                      Button, Arrow, SectionHead (shared pieces)
        Logo.astro               official wordmark (inline SVG, inherits colour)
      data/
        site.js                  ALL copy: services, packages, team, USPs, booking link
        images.js                image registry (swap files in assets/img, same names)
      scripts/
        main.js                  wires everything up
        modules/                 smooth scroll, menu, hero intro, reveals, services preview
      styles/global.css          design tokens (colour, type, spacing) + shared primitives

## Responsive behaviour
Tested with no horizontal overflow at 320, 360, 375, 414, 600, 768, 820, 1024, 1280, 1440, 1920 and 2560 px, plus landscape phones.
- **Phones and tablets:** overlay menu, headline sized to the screen, and work photos turn to colour as you scroll past them (there's no hover on touch).
- **Large screens:** content stays in a centred 1680px column.
- **Reduced motion** is respected. The hero blur is pre-rendered, so it looks the same in Safari, Chrome and Firefox.

## Before launch (TODO)
- **Booking link / email**: set `BOOKING_URL` and `EMAIL` in `src/data/site.js`. Right now they point to `#contact`.
- **Logo**: the official wordmark is in use (`src/assets/brand/logo-wordmark.svg`, a vector export from the client's Figma in Helvetica Now Display Bold).
- **Photos**: the originals from the Figma are in `references/figma-exports/`, with web-sized copies in `src/assets/img/`. Trackday, Jillian Ward and Falken are small even in the source file, so ask the client for higher-resolution versions.
- Copy, services, packages, team and USPs all live in `src/data/site.js`. Packages show no prices, by request.

## Hosting (custom domain, not Vercel)
`dist/` is plain static HTML/CSS/JS and works on any host:
- **Cloudflare Pages** (recommended, free): connect the repo, set build command `npm run build` and output `dist`, then add the custom domain.
- **Netlify**: same settings.
- **cPanel / shared hosting**: upload the contents of `dist/` to `public_html`.
