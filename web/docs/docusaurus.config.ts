import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  baseUrl: "/",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    format: "detect",
  },
  onBrokenLinks: "warn",
  organizationName: "alexander-shipilov",
  presets: [
    [
      "classic",
      {
        blog: false,
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  projectName: "positron",
  tagline: "Modular TypeScript Libraries & Type Definitions",
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Alexander Shipilov. Built with Docusaurus.`,
      links: [
        {
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "API Reference",
              to: "/docs/api",
            },
          ],
          title: "Documentation",
        },
        {
          items: [
            {
              href: "https://github.com",
              label: "GitHub",
            },
          ],
          title: "Repository",
        },
      ],
      style: "dark",
    },
    navbar: {
      items: [
        {
          label: "Guides",
          position: "left",
          sidebarId: "docsSidebar",
          type: "docSidebar",
        },
        {
          label: "API Reference",
          position: "left",
          to: "/docs/api",
        },
        {
          href: "https://github.com",
          label: "GitHub",
          position: "right",
        },
      ],
      logo: {
        alt: "Positron Logo",
        src: "img/logo.svg",
      },
      title: "Positron",
    },
    prism: {
      darkTheme: prismThemes.dracula,
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
  title: "Positron",
  url: "https://github.io",
};

export default config;
