# ByteSpace – Landing Page

A responsive implementation of the **ByteSpace** course-platform design from Figma, built for the Doin Tech Jr. Software Engineer (Frontend) assessment.

## Pages

| Route       | Page                        |
| ----------- | --------------------------- |
| `/`         | Landing page (required)     |
| `/login`    | Sign-in page (bonus)        |
| `/register` | Sign-up page (bonus)        |

## Tech stack

- **React 19** with **Vite**
- **React Router** for the pages
- **Plain CSS**: one CSS file per component, with the design's colours and fonts stored as CSS variables in `src/styles/global.css`

## Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # production build (dist/)
npm run preview   # preview the production build
npm run lint      # ESLint
```

## Folder structure

```
src/
├── main.jsx              # app entry, router setup
├── App.jsx               # routes
├── pages/                # Home, Login, Register, NotFound
├── components/
│   ├── home/             # landing page sections (Hero, FeaturedCourses, Growth, …)
│   ├── auth/             # AuthLayout, FormInput, SocialButtons (used by Login + Register)
│   ├── CourseCard.jsx    # reusable pieces used in several places
│   ├── StatCards.jsx
│   ├── AvatarStack.jsx
│   ├── Header.jsx / Footer.jsx / Logo.jsx / Shape.jsx / SectionTitle.jsx
│   └── Icons.jsx         # SVG icons exported from the Figma file
├── data/                 # all text, courses and links (so components stay clean)
├── styles/global.css     # CSS variables, fonts, reset, shared classes
└── utils/validation.js   # form validation helpers
public/
├── images/               # photos and 3D shapes exported from Figma
└── fonts/                # Satoshi and Clash Display (free fonts from Fontshare)
```

## How it works

- **Reusable components.** Components like `CourseCard`, `StatCards`, `AvatarStack`, `SectionTitle` and `FormInput` are used in several places. Page content comes from `src/data`, so the same card can show any course.
- **Course filter and search.** Clicking a topic chip filters the courses with `useState` and `Array.filter()`. The hero search box saves its text in the `Home` page state, and `FeaturedCourses` uses that text to filter the cards too.
- **Forms.** Login, Register and the newsletter check the input before "submitting" (required fields, email format, password at least 8 characters). There is no backend, so a successful submit only shows a message. Password fields have a Show/Hide button.
- **Responsive.** The Figma file only has a desktop (1440px) frame. I used mobile-first CSS with `min-width` media queries at 640px, 768px, 1024px and 1280px. On small screens the menu becomes a hamburger menu and the grids stack.
- **Picture collages.** The collages (student photo, ring and floating cards) are built at their exact Figma size. On smaller screens they are shrunk with `transform: scale()`, so they keep the same composition.
- **3D shapes.** The decorative shapes are images exported from the Figma file. They sit in a 1440px-wide layer centred on the page, so their `left`/`top` values match the design.
- **Accessibility.** Semantic HTML (`header`, `main`, `nav`, `section`, `footer`), labels on every input, error messages linked to their inputs, `alt=""` for decorative images and visible focus outlines.

## Small differences from the design

- The newsletter button says **"Subscribe"**. In the design it reuses the "Search" button from the hero.
- Long course titles wrap to two lines. In the design they overlap the "by purepearl studio" text.
- The copyright year is the current year.

## Deployment

Deployed on Vercel. `vercel.json` sends every route to `index.html`, so opening `/login` or `/register` directly works with React Router.
