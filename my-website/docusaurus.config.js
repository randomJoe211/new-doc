// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NebulaGraph Documentation',
  tagline: 'The fastest open source graph database',
  url: 'https://your-docusaurus-test-site.com',
  deploymentBranch: 'gh-pages', // The git branch where you deploy the static files.
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'randomJoe211', // Usually your GitHub org/user name.
  projectName: 'new-doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans". 
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/randomJoe211/new-doc/my-website/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cloud',
        path: 'cloud',
        routeBasePath: 'cloud',
        sidebarPath: require.resolve('./sidebarsCloud.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      announcementBar: {
        id: 'annoucement',
        content: 'This is a test website for NebulaGraph docs.',
        backgroundColor: 'Yellow', // Default: #fff
        textColor: '#000', // Default: #000
        isCloseable: true, // Default: true
      },
      navbar: {
        title: 'NebulaGraph Academy',
        logo: {
          alt: '',
          src: 'img/favicon.ico',
        },
        hideOnScroll: true,
        items: [/*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },*/
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'intro',
                label: 'Database',
              },
              {
                to: '/cloud/what-is-cloud',
                label: 'Cloud',
                //activeBaseRegex: `/cloud/`,
              },
              // ... more items
            ],
          },
          {
            href: 'https://academic.nebula-graph.io/',
            label: 'Learning',
            position: 'left',
          },
          {
            href: 'https://academic.nebula-graph.io/',
            label: 'Certifications',
            position: 'left',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown', // Doc version selector
            position: 'right',
          },
          {
            type: 'localeDropdown', // Language selector
            position: 'right',
          },
          {
            href: 'https://github.com/vesoft-inc/nebula-docs', // A link to the GitHub repo
            label: 'GitHub',
            className: 'header-github-link',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learning',
            items: [
              {
                label: 'NebulaGraph Database',
                to: '/docs/intro',
              },
              {
                label: 'NebulaGraph Cloud',
                to: '/docs/intro',
              },
              {
                label: 'Training Center',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://app.slack.com/client/TJB3N2BPD/CJNFUM7AR',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/vesoft-inc/nebula/discussions',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/NebulaGraph',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Download Center',
                href: 'https://nebula-graph.io/download',
              },
              {
                label: 'Blog',
                href: 'https://nebula-graph.io/posts',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vesoft-inc/nebula',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} vesoft inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
