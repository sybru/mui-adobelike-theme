import { AfterEffectsThemeProvider } from '../src'

export const decorators = [
  (Story) => (
    <AfterEffectsThemeProvider>
      <Story />
    </AfterEffectsThemeProvider>
  ),
];
  
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}