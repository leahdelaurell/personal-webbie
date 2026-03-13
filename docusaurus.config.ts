import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Leah Underhill',
  tagline: 'Software engineer, writer, and open source enthusiast',
  favicon: 'img/leah-underhill.png',
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  url: 'https://leahunderhill.github.io',
  baseUrl: '/personal-webbie/',
  organizationName: 'leahdelaurell', // Usually your GitHub org/user name.
  projectName: 'personal-webbie', // Usually your repo name.
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/leah-underhill.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Leah Underhill',
      logo: {
        alt: 'Leah Underhill Logo',
        src: 'img/leah-underhill.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutMeSidebar',
          position: 'left',
          label: 'About Me',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/leahdelaurell',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About Me',
              to: '/docs/about-me',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/leahdelaurell',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Leah Underhill, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
