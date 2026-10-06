# Cling Info Tech homepage

Responsive React and Vite implementation of the Cling Info Tech homepage.

## Requirements

- Node.js 22.12 or newer
- npm

## Build for deployment

```sh
npm ci
npm run build
```

The production site is written to `dist/`. Deploy the contents of that folder to any static host. No environment variables or server-side runtime are required. The project uses hash links for page sections, so it does not need custom route-rewrite rules.

To inspect the production build locally:

```sh
npm run preview
```

## Assets

The videos and the replacement leadership portrait are bundled with the project. Legacy homepage photos and some client logos are still served from the original Cling Info Tech image service and public S3 URLs, so those remote assets must remain publicly accessible for the deployed page to show them.
