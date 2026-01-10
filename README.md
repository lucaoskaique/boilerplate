# Next.js Boilerplate

A modern Next.js boilerplate with TypeScript, React 19, Tailwind CSS v4, Storybook 10, and Jest.

## 🚀 Tech Stack

- **Next.js 15** - React framework with Pages Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5.7** - Static type checking
- **Tailwind CSS v4** - Utility-first CSS framework
- **Storybook 10** - Component development & documentation (Vite-based)
- **Jest 29** - Unit testing framework
- **React Testing Library 16** - Testing utilities
- **ESLint & Prettier** - Code linting and formatting
- **Husky & Lint-staged** - Git hooks for quality control

## 🏁 Getting Started

### Install dependencies:

```bash
npm install
# or
yarn install
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run Storybook:

```bash
npm run storybook
# or
yarn storybook
```

### Run tests:

```bash
npm test
# or
yarn test
```

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components with tests & stories
│   ├── pages/          # Next.js pages
│   └── styles/         # Global styles
├── generators/         # Plop templates for generating components
├── public/             # Static assets
└── .storybook/         # Storybook configuration
```

## 🎨 Generate New Components

Use Plop to generate new components with stories and tests:

```bash
npm run generate
# or
yarn generate
```

## 🧪 Testing

- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ci` - Run tests for CI

## 📦 Building

```bash
npm run build
npm start
```

## 🔧 Configuration

The project includes configurations for:
- TypeScript (`tsconfig.json`)
- ESLint (`.eslintrc.json`)
- Prettier (via ESLint)
- Jest (`jest.config.js`)
- Storybook (`.storybook/`)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
