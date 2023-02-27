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
        },
        sliderThumb: {
          color: "magenta"
        },
        toggleButtonIconSelected: {
          color: "red"
        }
      }
    })
    return (
      <ThemeProvider theme={theme}>
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