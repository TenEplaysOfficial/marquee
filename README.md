<!-- ![GitHub License](https://img.shields.io/github/license/TenEplaysOfficial/marquee) -->
<!-- ![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/TenEplaysOfficial/marquee) -->
<!-- ![GitHub Sponsors](https://img.shields.io/github/sponsors/TenEplaysOfficial) -->

# @tenedev/marquee

`@tenedev/marquee` is a lightweight and easy-to-use React component library that enables smooth, customizable scrolling text effects in your web applications. Built with `framer-motion`, it offers a seamless animation experience, allowing you to create engaging dynamic content like announcements, news tickers, and promotional banners. With simple integration and flexible customization options, `@tenedev/marquee` is perfect for adding motion and attention-grabbing elements to your site.

---

### How Does Marquee Work?
The `Marquee` component scrolls text horizontally in a loop. It can be customized to scroll in either left-to-right or right-to-left directions. Powered by `framer-motion`, it offers seamless, high-performance animations with easy-to-use props to control the behavior.

### Why Use Marquee?

- **Engage Users**: Capture attention with dynamic, moving text—ideal for announcements, news tickers, or promotional banners.
- **Customizable**: Adjust the scroll direction, speed, and content, making it suitable for various use cases.
- **Smooth Animations**: With `framer-motion`, `@tenedev/marquee` provides smooth, responsive scrolling effects that enhance the user experience.

### Installation

To get started with `@tenedev/marquee`, install the package and set up your React app:

```bash
npm i @tenedev/marquee
```

For detailed installation steps, check out the [Getting Started guide](/getting-started).


### Props

| Prop       | Type        | Default | Description                                                                  |
| ---------- | ----------- | ------- | ---------------------------------------------------------------------------- |
| `children` | `ReactNode` | —       | The content to be displayed in the marquee (e.g., text, images, components). |
| `speed`    | `number`    | `50`    | The speed of the scrolling animation.                                        |
| `gap`      | `number`    | `10`    | The gap (in pixels) between items in the marquee.                            |



## Example Usage

Here’s how to use the `Marquee` component:

```tsx
import { Marquee } from "@tenedev/marquee";

<Marquee speed={75} gap={20}>
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</Marquee>
```

### Notes

- Ensure `framer-motion` is installed since it is a peer dependency.
- The `speed` prop determines the animation duration.
- The `gap` prop adjusts spacing between child elements.

