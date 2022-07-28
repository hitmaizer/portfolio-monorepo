# Portfolio monorepo
This monorepo was created to develop a personal Portfolio page.

![brave_7K8xZdSOOc](https://user-images.githubusercontent.com/58346965/175031334-acd56fd3-05b3-40f3-8312-24ca3bb727ee.png)

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org) app
- `portfolio-cms`: a [Strapi](https://strapi.io/) app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Frontend

The frontend is handled by a [Next.js](https://nextjs.org) app with [TypeScript](https://www.typescriptlang.org/), handles state with [Redux Toolkit](https://redux-toolkit.js.org/) and data fetching is done mostly with [axios](https://axios-http.com/).<br>
Styling is done with CSS-in-JS's library [styled-components](https://styled-components.com/), [styled-system](https://styled-system.com/), [styled-icons](https://styled-icons.dev/).
It's currently hosted on [Vercel](https://vercel.com/).

### Backend

The backend is handled by a [Strapi](https://strapi.io/) app that provides a REST API that the frontend uses to fetch data. It's currently deployed to Heroku.


