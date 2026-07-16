# I4 Matrix

Official website for I4 Matrix, a software studio based in Colombo, Sri Lanka, building premium web, mobile, tourism, transport, API, and cloud platforms.

Live site: i4matrix.com

---

## Tech Stack

- Framework: Next.js 15 (App Router)
- UI Library: React 19
- Language: TypeScript
- Styling: Tailwind CSS v3
- Animations: Framer Motion
- Icons: Lucide React
- Utilities: clsx, tailwind-merge

---

## Getting Started

### 1. Prerequisites
Node.js (v18.x or later) and npm installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to:
http://localhost:3000

---

## Available Scripts

| Command         | Description                          |
|-----------------|---------------------------------------|
| npm run dev     | Starts the local development server   |
| npm run build   | Builds the app for production         |
| npm run start   | Runs the production build locally     |
| npm run lint    | Runs ESLint to check code quality     |

---

## Pages

| Route          | Description                                         |
|-----------------|------------------------------------------------------|
| /               | Home — hero, services overview, projects, team, testimonials |
| /about          | Company story, mission, vision, growth timeline, management |
| /services       | Full service catalog with process and FAQ            |
| /portfolio      | Project showcase and screenshots                      |
| /team           | Team members grouped by department                    |
| /careers        | Culture, values, open roles, and application form      |
| /contact        | Contact details and inquiry form                       |

---

## Services

- Web Application Development
- Mobile App Development
- UI/UX Design
- Tourism System Development
- Transport Management Systems
- Backend API Development
- Cloud Solutions
- Admin Panel Development
- DevOps & Maintenance

---

## Features

- Responsive design across desktop, tablet, and mobile
- Light and dark mode with theme persistence
- Glass-effect navigation bar with scroll-aware styling
- Animated hero visual showing platform orchestration
- Interactive service cards with gradient hover states
- Infinite scrolling trusted-companies marquee
- Careers application form with file upload
- Contact and project inquiry forms

---

## Project Structure

```
i4matrix/
├── src/
│   └── app/             Next.js App Router pages
│       ├── about/
│       ├── careers/
│       ├── contact/
│       ├── portfolio/
│       ├── services/
│       ├── team/
│       ├── layout.tsx   Root layout (navbar, footer, theme provider)
│       ├── page.tsx     Home page
│       └── globals.css  Global styles and theme variables
├── components/           Reusable UI components (navbar, footer, sections, motion helpers)
│   └── ui/                Base UI primitives (button, card, input)
├── data/                  Site content (services, projects, team, testimonials, etc.)
├── hooks/                 Custom React hooks
├── lib/                   Helper functions and utilities
├── public/                Static assets (images, icons)
├── tailwind.config.ts     Tailwind theme configuration
└── tsconfig.json          TypeScript configuration
```

---

## Deployment

_Add deployment details here once finalized (hosting platform, custom domain, environment variables required)._

---

## License

© 2026 I4 Matrix. All Rights Reserved.