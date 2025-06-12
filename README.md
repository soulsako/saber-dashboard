## Saber Dashboard

A front-end dashboard application built with **Vite**, **React**, **TypeScript**, **Tailwind CSS**, and **LocalStorage**. The app is designed to manage and approve regular expression patterns, with support for text extraction and contextual modes.

## ⚙️ Project Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/saber-dashboard.git
   cd saber-dashboard
   ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Running Tests

- This project uses [https://vitest.dev/guide/] to provide test coverage. Tests can live anywhere; Vitest automatically picks up [**/*.test.tsx or **/__tests__/*].

```bash
   npm run test
   # or
   npm run test:watch
   yarn test
   # or
   pnpm test
   # or
   bun test
```

## 📦 Tech Stack

- **React** (with hooks)
- **Vite** (for fast bundling)
- **TypeScript** (strict type safety)
- **Tailwind CSS** (utility-first styling)
- **React Context API** (for state management)
- **LocalStorage** (as a lightweight persistence layer)
- **React Toastify** (for notifications)

---

## 🤝 Assumptions Made

- This application is designed with a scalable architecture anticipating the need for future features such as:

- User authentication

- Multiple dashboards

- API integration

All code was committed using separate Git branches to enable cleaner collaboration and to make it easier to revert specific changes if necessary. This is based on the assumption that multiple developers will be contributing to this project.

## 🚧 Future Improvements

- Given more time, the following enhancements would be implemented:

- Regex Validation Enhancements: Improve error handling and pattern testing sandbox.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
