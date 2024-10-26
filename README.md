# ShopClone

ShopClone is a React-based e-commerce application built with Vite, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 14 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/shopclone.git
   cd shopclone
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server:

```
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to view the application.

## Building for Production

To build the application for production:

```
npm run build
```



This will create a `dist` folder with the production-ready files.

## Additional Scripts

- `npm run lint`: Run ESLint to check for code quality and style issues.
- `npm run preview`: Preview the production build locally.

## Project Structure

The main application code is located in the `src` directory:

- `src/App.tsx`: The main application component
- `src/components/`: Reusable React components
- `src/lib/`: Utility functions and helpers
- `src/index.css`: Global styles and Tailwind CSS imports

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

## Configuration Files

- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `vite.config.ts`: Vite configuration
- `eslint.config.js`: ESLint configuration

For more details on the project setup and configuration, refer to the respective configuration files in the project root.