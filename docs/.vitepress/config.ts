import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Marquee",
  description: "Documentation",
  // Remove .html from links
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    // ],

    sidebar: [
      {
        // text: 'Introduction',
        collapsed:true, // Makes the dropdown collapsible
        items: [
          { text: 'What is Marquee?', link: '/what-is-marquee' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Example Usage', link: '/example-usage'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TenEplaysOfficial/marquee' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@tenedev/marquee' }
    ],

    search: {
      provider: 'local',
    },

    outline: 'deep',

    editLink: {
      pattern: 'https://github.com/TenEplaysOfficial/marquee/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2024-present Evan You'
    // }
  }
})
