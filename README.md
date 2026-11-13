# KIRZ Group Website — v2

Responsive Next.js corporate website using a simple sans-serif font system and black, white and gold branding. Uses text-based UI symbols instead of an icon package for maximum Termux/Android compatibility.

## Included
- KIRZ Group logo in `public/images/kirz-group-logo.svg` (vector lockup based on the selected globe/leaf/gold-swoosh concept); original generated PNG is also retained.
- Responsive header with working mobile menu
- Hindi / English language switcher
- Homepage, About, Businesses, Brands listing
- Individual profile pages for all six brands
- Partnership enquiry form UI with browser-side validation
- Admin login screen and dashboard UI
- Contact, Privacy Policy and Terms placeholder pages
- SEO metadata and mobile-responsive styling

## Run in Termux
Keep the project in Termux home storage, not `/storage/emulated/0`.

```bash
pkg update
pkg install nodejs-lts git unzip
cd ~/kirz-group-website
npm install
npm run dev
```
Open `http://localhost:3000`.

If starting from the ZIP:
```bash
cd ~
unzip ~/storage/downloads/kirz-group-website-v2.zip
cd kirz-group-website-v2
npm install
npm run dev
```

## GitHub
```bash
git init
git add .
git commit -m "KIRZ Group website v2"
git branch -M main
git remote add origin https://github.com/engggayyurabbasi-beep/kirz-group-website.git
git push -u origin main
```
If `origin` already exists, use:
```bash
git remote set-url origin https://github.com/engggayyurabbasi-beep/kirz-group-website.git
```

## Important production requirements
The partnership form is currently a frontend demo: it does not save or send enquiries. The admin login is intentionally non-authenticating and the dashboard is a UI preview. Before public launch, connect Supabase (or another secure backend), implement real authentication, server-side form handling, spam protection, role-based access and database policies. Never deploy a demo admin screen as a secured admin system.
Replace placeholder contact details and review company/legal copy before launch. Verify domain ownership and DNS for `kirzgroup.com`.

## Version 2.1 compatibility patch
This version removes lucide-react component imports to avoid a client runtime error from an undefined icon export in some Android/Termux installs. React and React DOM are pinned to the same version.

## Official company details added in v2.2
- Phone / WhatsApp: +91-7300700809
- Email: info@kirzgroup.com
- Location: Kandhla, Shamli, Uttar Pradesh, India
- Tagline: Building Businesses. Creating Opportunities.

The Contact page and footer now show verified contact details; phone and email links are clickable, and a floating WhatsApp link opens the official chat. The partnership form still needs backend integration before it can store or send enquiries.


## Version 2.3 — public website completion
- Individual SVG logo and cover artwork for all six brands.
- Brand profiles support Hindi/English content, brand focus areas and enquiry CTA.
- Expanded Company Profile with a non-date-based Our Journey section.
- Partnership options: Distribution, Reseller, Wholesale/Bulk and Business Collaboration.
- Homepage updates cards and partner feedback invitation. No fabricated testimonials are published.
- SEO metadata, Open Graph defaults, `sitemap.xml` and `robots.txt`.
- `/admin/` excluded from search indexing.

## Launch and mobile QA checklist
- Check homepage, about, businesses, brands, each of six brand pages, partnership and contact.
- Switch EN/Hindi on each page and check mobile menu.
- Test at 360px, 390px and 430px viewport widths plus desktop.
- Test phone, email and WhatsApp links.
- Check `https://kirzgroup.com/sitemap.xml` and `/robots.txt` after deployment.
- Submit sitemap in Google Search Console after domain DNS and SSL are configured.
- Publish only real partner testimonials with permission.
- Connect the enquiry form to a secure backend before accepting live enquiries.
- Verify legal/company registration claims before public launch.


## Version 2.4 — compact homepage and motion
- Reduced the homepage hero height and tightened mobile spacing while retaining the headline and both CTA buttons.
- Removed the four-item trust strip below the hero so the next content section appears immediately.
- Added global scroll-reveal animations for sections and cards.
- Added subtle hover, active, focus, navigation dropdown and form-focus transitions.
- Respects `prefers-reduced-motion` for accessibility.


## Version 2.5 — premium corporate visual refresh
- Rebuilt shared internal page hero banners and page hierarchy.
- Reworked Brands directory cards, portfolio statistics and brand presentation.
- Rebuilt Business Verticals as premium dark feature cards.
- Reworked About page with company statement, pillars and journey feature.
- Reworked Partnership page with four opportunity cards and split enquiry area.
- Reworked Contact page with direct contact cards and enquiry CTA.
- Added legal-page content panels and improved individual brand profile information.
- Replaced generic letter-like brand emblems with distinct simple vector marks.
- Improved mobile layouts for the above pages.


### Portfolio button behaviour
- Profile sections have direct anchors for products/services, manufacturing, business partners, wholesalers and retailers.
- Portfolio cards can be edited and extended through the dashboard content editor.


## Version 2.7 — compact business directory cards
- Directory cards now show only the brand image/logo, title and subtitle.
- The entire card is clickable and opens its full profile.
- Removed descriptions and action buttons from the directory card itself; all detailed information and actions remain on the profile page.


## Version 2.8 — three requested design changes applied
1. Business/brand cards show only the image/logo, title and subtitle; the full card opens its profile.
2. Site-wide spacing, responsive breakpoints, text wrapping and floating WhatsApp placement have been tightened to prevent visual overlap.
3. The homepage retains About, Portfolio, Partnership, Latest Updates and Partner Experience sections in a shorter, more balanced order. Redundant business-vertical tiles were removed from the homepage; full business details remain on inner pages.
- Homepage portfolio shows four featured active items; the full portfolio remains available at `/brands`.
- Brand directory cards and portfolio directory cards both use the compact image/title/subtitle treatment.


## Admin panel
See `README-ADMIN.md` for login configuration, features, and deployment/storage notes.
