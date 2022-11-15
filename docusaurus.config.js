// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NebulaGraph Documentation',
  tagline: 'The fastest open source graph database',
  url: 'https://randomjoe211.github.io/',
  deploymentBranch: 'gh-pages', // The git branch where you deploy the static files.
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'randomJoe211', // Usually your GitHub org/user name.
  projectName: 'randomjoe211.github.io', // Usually your repo name.
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans". 
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // 如果你不需要覆盖默认值，你可以忽略这个语言（比如 zh-Hans）
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars/sidebars.js'),
          path: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            return `https://github.com/randomJoe211/randomjoe211.github.io/edit/main/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: false,
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.md'],
        },
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
        sidebarPath: require.resolve('./sidebars/sidebarsCloud.js'),
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          return `https://github.com/randomJoe211/randomjoe211.github.io/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'training',
        path: 'training',
        routeBasePath: 'training',
        sidebarPath: require.resolve('./sidebars/sidebarsTraining.js'),
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          return `https://github.com/randomJoe211/randomjoe211.github.io/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        // ... other options
      },
    ]
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: '/',
        docsDir: ['docs', 'cloud', 'training'],
        highlightSearchTermsOnTargetPage: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
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
        backgroundColor: '#cccccc', // Default: #fff
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
            to: '/training/',
            label: 'Training',
            activeBaseRegex: `/training/`,
          },
          {
            to: 'https://academic.nebula-graph.io/',
            label: 'Certifications',
            position: 'left',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown', // Doc version selector
            position: 'right',
            docsPluginId: 'default',
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
                to: 'https://nebula-graph.io/download',
              },
              {
                label: 'Blog',
                to: 'https://nebula-graph.io/posts',
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
