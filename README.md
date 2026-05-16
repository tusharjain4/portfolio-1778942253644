# Pooja R. Sonar - Software Developer Portfolio

This is a Next.js 14 App Router portfolio project for Pooja R. Sonar, built with TypeScript and Tailwind CSS. It is based on the "Adizen" template, featuring a minimal and clean design.

## Features

*   **Hero Section**: Showcases name, role, and a compelling tagline.
*   **Project Showcase**: Highlights key projects with descriptions and technologies used.
*   **Skills Grid**: Organizes technical skills by category.
*   **Journey Timeline**: Details professional journey, including experience and achievements.
*   **Contact Footer**: Provides essential contact information.
*   **Responsive Design**: Adapts to various screen sizes.

## Technologies Used

*   Next.js 14 (App Router)
*   React 18
*   TypeScript
*   Tailwind CSS
*   Google Fonts (`DotGothic16`, `Manrope`, `Archivo`, `Archivo Narrow`, `Source Serif 4`)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd adizen-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### 4. Build for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

This command will compile the application and optimize it for deployment. You can then start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

*   `app/`: Contains the root layout and page components.
    *   `layout.tsx`: Defines the overall structure, imports global CSS, and sets up Google Fonts.
    *   `page.tsx`: The main page that orchestrates and renders all section components.
    *   `globals.css`: Global styles, including Tailwind directives and the verbatim template CSS.
*   `components/`: Reusable UI components for each section of the portfolio.
    *   `Navbar.tsx`
    *   `Hero.tsx`
    *   `Projects.tsx`
    *   `Skills.tsx`
    *   `Journey.tsx`
    *   `Footer.tsx`
*   `data/`: Stores the portfolio content in `portfolio.json`.
*   `public/assets/images/`: Static assets like images and icons.
*   `tailwind.config.ts`: Tailwind CSS configuration.
*   `tsconfig.json`: TypeScript configuration.

## Customization

*   **Portfolio Data**: Edit `data/portfolio.json` to update your personal information, projects, skills, and contact details.
*   **Styling**: The core styling is derived from the provided HTML template's CSS, which is copied verbatim into `app/globals.css`. For minor adjustments, you can modify `app/globals.css` or extend `tailwind.config.ts` with additional utility classes, keeping in mind the strict fidelity requirements of the template.
*   **Images**: All images are referenced from the `/public/assets/images` directory. If you wish to change images, replace the files in this directory and update the `src` attributes in the respective components.
---