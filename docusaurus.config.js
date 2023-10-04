// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ingonyama Developer Documentation',
  tagline: 'Ingonyama is a next-generation semiconductor company, focusing on Zero-Knowledge Proof hardware acceleration. We build accelerators for advanced cryptography, unlocking real-time applications.',
  url: 'todo', //todo
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'Ingonyama',
  projectName: 'ingonyama-developer-docs',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ingonyama-zk/developer-docs',
        },
        blog: {
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katex],
          showReadingTime: true,
          editUrl: 'https://github.com/ingonyama-zk/developer-docs',
        },
        pages: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      'data-domain':'ingonyama.com',
      defer: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'C4J3NJDLCO',      
        apiKey: 'e633ae6e113f548d55297a2cca6ae31f',
        indexName: 'ingonyama',
        searchPagePath: 'search',
        contextualSearch: true,
      },
      navbar: {
        title: 'Ingonyama Developer Documentaion',
        logo: {
          alt: 'Ingonyama Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            position: 'left',
            label: 'Docs',
            to: '/',
          },
          {
            position: 'left',
            label: 'FAQ',
            to: 'tech_faq',
          },
          {
            href: 'https://github.com/ingonyama-zk',
            position: 'right',
            label: 'GitHub',
          },
          {
            href: 'https://www.ingonyama.com/ingopedia/glossary',
            position: 'right',
            label: 'Ingopedia',
          },
         {
            type: 'dropdown',
            position: 'right',
            label: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6vYrE7waPj',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/Ingo_zk',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@ingo_ZK'
              },
              {
                label: 'Mailing List',
                href: 'https://wkf.ms/3LKCbdj',
              }
            ]
          },

        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Ingonyama, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/logo.png',
    }),
};

module.exports = config;
