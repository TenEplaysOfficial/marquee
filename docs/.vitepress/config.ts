import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Marquee",
  description: "Documentation",
  // Remove .html from links
  cleanUrls: true,
  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    // ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed:true, // Makes the dropdown collapsible
        items: [
          { text: 'What is Marquee?', link: '/what-is-marquee' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TenEplaysOfficial/marquee' },
      { icon: 'npm', link: 'https://github.com/TenEplaysOfficial/marquee' }
    ],

    search: {
      provider: 'local',
    },

    outline: 'deep',
  }
})
