---
title: Example Usage
---

# Example Usage

Here’s how to use the `Marquee` component:

```tsx
import { Marquee } from "@tenedev/marquee";

<Marquee speed={75} gap={20}>
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</Marquee>
```

::: tip NOTE

- Ensure `framer-motion` is installed since it is a peer dependency.
- The `speed` prop determines the animation duration.
- The `gap` prop adjusts spacing between child elements.

:::