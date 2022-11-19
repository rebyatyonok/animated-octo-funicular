module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": {
    name: "@storybook/web-components-vite",
    options: {}
  },
  "core": {},
  "features": {
    "storyStoreV7": true
  },
  docsPage: {
    docs: "automatic"
  }
};