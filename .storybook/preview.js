import { ThemeProvider, CssBaseline } from '@mui/material'
import { afterEffectsTheme, useAfterEffectsTheme } from '../src'

export const decorators = [
  (Story) => {
    const theme = useAfterEffectsTheme({
      elementColor: {
        checkbox: {
          color: "red"
        },
        radioButtonChecked: {
          color: "green"
        }
      }
    })
    return (
      <ThemeProvider theme={afterEffectsTheme}>
      <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  },
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