# HRM Office website

The hrmoffice.org website: recruitment, HR outsourcing, HR software and AIHR training for companies and HR professionals in Nigeria and across Africa.

## Stack

- Next.js 15 (App Router), React 19, plain JavaScript
- One stylesheet: `app/globals.css`
- Icons: Phosphor (duotone; brand logos use `weight="fill"`)
- Contact and mentorship forms send email through `app/api/*/route.js` with nodemailer (Gmail)

## Run locally

```bash
npm ci
cp .env.local.example .env.local   # then fill in the values
npm run dev                        # http://localhost:3000
```

## Environment

| Variable | What it is |
| --- | --- |
| `EMAIL_USER` | Gmail address that sends the form emails |
| `EMAIL_PASS` | A Gmail **app password** for that address (not the account password) |
| `EMAIL_TO` | Inbox that receives contact and mentorship messages |

Without these, the forms show "Messaging is not set up yet" and offer WhatsApp instead.

## Where things live

- `app/`: one folder per page; `app/training/[slug]/` renders the AIHR program pages
- `components/`: header, footer, shared sections (`ui.js`), forms, interactive pieces
- `lib/content.js`: contact details, programs, testimonials, downloads
- `lib/posts.json`: blog articles; `lib/resources.json`: the AI in HR library
- `public/AI-HR/`: downloadable AI in HR files

## Checks

```bash
npm run lint
npm run build
```

Both run on every push and pull request (`.github/workflows/ci-cd.yml`).
