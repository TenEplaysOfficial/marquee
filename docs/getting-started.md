---
title: Getting Started
---

# Getting Started

## Installation

To install the `@tenedev/marquee` package, run:

::: code-group

```sh [npm]
npm i @tenedev/marquee
```
```sh [yarn]
yarn add @tenedev/marquee
```

:::

This component is built using **React** and requires the `framer-motion` library as a peer dependency. Install it alongside:

::: code-group

```sh [npm]
npm i framer-motion
```
```sh [yarn]
yarn add framer-motion
```

:::

## Integration Steps

Follow the instructions below to integrate `@tenedev/marquee` with different setups. Ensure you have React and framer-motion installed for all frameworks.

### React Setup

- Create a React app and install dependencies:

   ```bash
   npx create-react-app my-app
   cd my-app
   npm i @tenedev/marquee framer-motion
   ```

   **Documentation**: [React Setup Guide](https://reactjs.org/docs/getting-started.html)

###### OR 

### Vite Setup

- Create a Vite app with the React template and install dependencies:

   ```bash
   npm create vite@latest my-vite-app --template react
   cd my-vite-app
   npm i @tenedev/marquee framer-motion
   ```

   **Documentation**: [Vite + React Guide](https://vitejs.dev/guide/)

###### OR

### Next.js Setup

- Create a Next.js app and install dependencies:

   ```bash
   npx create-next-app my-next-app
   cd my-next-app
   npm i @tenedev/marquee framer-motion
   ```

   **Documentation**: [Next.js Setup Guide](https://nextjs.org/docs/getting-started)

## Marquee Component

The `Marquee` component enables smooth, continuous scrolling of its child elements. It is highly customizable, allowing you to adjust the scrolling speed and spacing between items.

### Props

| Prop       | Type        | Default | Description                                                                  |
| ---------- | ----------- | ------- | ---------------------------------------------------------------------------- |
| `children` | `ReactNode` | —       | The content to be displayed in the marquee (e.g., text, images, components). |
| `speed`    | `number`    | `50`    | The speed of the scrolling animation.                                        |
| `gap`      | `number`    | `10`    | The gap (in pixels) between items in the marquee.                            |

### Example Usage

```tsx
import { Marquee } from "@tenedev/marquee";

<Marquee speed={75} gap={20}>
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</Marquee>;
```

## Additional Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Marquee GitHub Repository](https://github.com/TeneplaysOfficial/marquee)
