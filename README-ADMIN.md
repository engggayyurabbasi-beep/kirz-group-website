# KIRZ Group Admin Panel — setup

## Included modules
- Secure administrator login at `/admin/login`
- Dashboard overview and counts
- Portfolio CMS: create/edit/publish/hide/delete brands and apps, Hindi/English text, image URL or PNG/JPG/WEBP image upload, app download URLs and custom profile buttons
- Partnership enquiry inbox with New / Contacted / Closed status
- Website settings for contact information, tagline and homepage heading/intro
- Signed, HTTP-only admin session cookie (8-hour expiry)
- Server-side JSON storage in `data/` for local/self-hosted Node deployments

## Configure credentials in Termux
Create a private `.env.local` file in the project root. Keep it out of GitHub.

```bash
cat > .env.local <<EOF
ADMIN_EMAIL=your-admin-login-id
ADMIN_PASSWORD=choose-your-private-password
ADMIN_SESSION_SECRET=$(openssl rand -hex 32)
EOF
```

Replace the first two values with your chosen administrator login ID and password. `.env.local` is ignored by Git.

Then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000/admin/login`.

## Important deployment note
This version stores portfolio content, settings and enquiries as JSON files in the `data/` directory. This works for local Termux development and a persistent self-hosted Node.js server. Many serverless hosts (including typical Vercel deployments) have ephemeral/read-only filesystems; connect a persistent database (Postgres/Supabase/Neon) before using this as the live production CMS. Back up `data/*.json` regularly.

## Security
- The password is read only from private environment variables and is not hardcoded in client JavaScript.
- `.env.local` is ignored by Git.
- The session cookie is HttpOnly, SameSite=Strict, signed and expires after 8 hours.
- Use a strong unique password before exposing the admin login to the public internet. The supplied starter password should be changed before production.
