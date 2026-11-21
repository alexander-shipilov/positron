import react from "@vitejs/plugin-react";
import { defineConfig, mergeConfig } from "vite";

import baseConfig from "@positron/heft-app-rig/profiles/default/vite.config.base.mjs";

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [react()],
  }),
);
