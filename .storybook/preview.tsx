import type { Preview } from "@storybook/react";
import { ThemeProvider } from 'src/app/theming';
import React from 'react';
import { LocalizationInitiator } from 'src/app/localization/LocalizationInitiator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <LocalizationInitiator />
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
};

export default preview;
