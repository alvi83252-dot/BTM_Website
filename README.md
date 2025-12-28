# Brunel Talent Marketplace (External Frontend)

This is the external frontend application for the Brunel Talent Marketplace, built with React, TypeScript, and Vite.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/BrunelTalentMarketplace/btm-frontend-external.git
    cd btm-frontend-external
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure environment variables:
    Copy `.env.example` to `.env` and update the values as needed.
    ```bash
    cp .env.example .env
    ```

## 🛠️ Scripts

-   **`npm run dev`**: Starts the development server. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
-   **`npm run build`**: Builds the app for production to the `dist` folder.
-   **`npm run preview`**: Locally preview the production build.
-   **`npm run lint`**: Runs ESLint to check for code quality issues.
-   **`npm run format`**: Formats the code using Prettier.
-   **`npm run test`**: Runs the test suite using Vitest.
-   **`npm run test:ui`**: Opens the interactive Vitest UI.

## 🏗️ Tech Stack

-   **[React](https://react.dev/)**: UI Library
-   **[TypeScript](https://www.typescriptlang.org/)**: Static Type Checking
-   **[Vite](https://vitejs.dev/)**: Build Tool & Development Server
-   **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS Framework
-   **[Redux Toolkit](https://redux-toolkit.js.org/)**: State Management
-   **[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)**: Data Fetching & Caching
-   **[Vitest](https://vitest.dev/)**: Unit Testing Framework
-   **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: Component Testing
-   **[Prettier](https://prettier.io/)**: Code Formatter
-   **[ESLint](https://eslint.org/)**: Linter

## 📂 Project Structure

```
btm-frontend-external/
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   └── ui/          # Generic UI components (Button, Input, etc.)
│   ├── features/        # Feature-based modules (slices, components)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route components / Pages
│   ├── services/        # API definitions (RTK Query)
│   ├── test/            # Test setup and utilities
│   ├── types/           # Shared TypeScript definitions
│   ├── utils/           # Helper functions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 💎 Code Quality & Standards

### Formatting
This project uses **Prettier** for code formatting.
-   **VS Code**: The project is configured to format on save automatically.
-   **Command Line**: Run `npm run format` to format all files.

### Testing
This project uses **Vitest** and **React Testing Library**.
-   **Unit Tests**: Write tests for utilities and logic.
-   **Component Tests**: Write tests for UI components to ensure they render and behave correctly.
-   **Run Tests**: `npm run test`

## 🤝 Contributing

1.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
2.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3.  Push to the branch (`git push origin feature/AmazingFeature`)
4.  Open a Pull Request

## 📄 License

Copyright © 2025 Brunel Talent Marketplace. All rights reserved.
This project is proprietary and confidential.