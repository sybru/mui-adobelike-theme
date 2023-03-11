import { ThemeProvider, CssBaseline } from '@mui/material'
import { afterEffectsTheme, useAfterEffectsTheme } from '../'

export const decorators = [
  (Story) => {
    const theme = useAfterEffectsTheme({
      elementTheme: {
        formLabel: {
          display: 'inline-flex',
          alignItems: "center",
          width: "320px"
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