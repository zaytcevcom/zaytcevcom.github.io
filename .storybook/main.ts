import * as path from 'node:path';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: { resolve: { alias: any; }; module: { rules: { test: RegExp; use: (string | { loader: string; options: { importLoaders: number; modules: { auto: boolean; localIdentName: string; }; implementation?: undefined; sassOptions?: undefined; }; } | { loader: string; options: { implementation: any; sassOptions: { fiber: boolean; includePaths: any[]; }; importLoaders?: undefined; modules?: undefined; }; })[]; include: any; }[]; }; }) => {
    // Добавляем алиасы
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        src: path.resolve(__dirname, "../src"),
      };
    }

    return config;
  }
};
export default config;
