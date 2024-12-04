---
title: What is Marquee
---

# What is Marquee?

`@tenedev/marquee` is a React component library designed to create smooth, customizable scrolling text effects (marquees) in web applications. It leverages the power of `framer-motion` for fluid animations and transitions.

### How Does Marquee Work?
The `Marquee` component scrolls text horizontally in a loop. It can be customized to scroll in either left-to-right or right-to-left directions. Powered by `framer-motion`, it offers seamless, high-performance animations with easy-to-use props to control the behavior.

### Why Use Marquee?

- **Engage Users**: Capture attention with dynamic, moving text—ideal for announcements, news tickers, or promotional banners.
- **Customizable**: Adjust the scroll direction, speed, and content, making it suitable for various use cases.
- **Smooth Animations**: With `framer-motion`, `@tenedev/marquee` provides smooth, responsive scrolling effects that enhance the user experience.

### Installation

To get started with `@tenedev/marquee`, install the package and set up your React app.

```bash
npm i @tenedev/marquee
```

For detailed installation steps, check out the [Getting Started guide](/getting-started).

### Usage

Here’s a simple example of how to use the `Marquee` component in your React project. For more examples, visit the [Example Usage guide](/example-usage).

```tsx
import { Marquee } from '@tenedev/marquee';

function App() {
  return (
    <div>
      <Marquee>
        This is a left-to-right scrolling text!
      </Marquee>
    </div>
  );
}
```
