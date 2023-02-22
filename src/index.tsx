import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { afterEffectsTheme } from './theme'

export const AfterEffectsThemeProvider = ({ children }: { children?: React.ReactNode; }) => {
    return (
        <ThemeProvider theme={afterEffectsTheme}>
        <CssBaseline />
        {children}
        </ThemeProvider>
    )
}