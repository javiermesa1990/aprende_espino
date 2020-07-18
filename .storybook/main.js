module.exports = {
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource",
  ],
  webpackFinal: async (config) => {
    // do mutation to the config

    return config;
  },
};
