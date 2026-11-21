import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

import apiSidebar from "./sidebars.api.json";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "doc",
        id: "api/index",
      },
      items: apiSidebar as SidebarsConfig[string],
    },
  ],
};

export default sidebars;
