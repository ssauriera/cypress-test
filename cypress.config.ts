import { defineConfig } from "cypress";

const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: './cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    }
  }
});
