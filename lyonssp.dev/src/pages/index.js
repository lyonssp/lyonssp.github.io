import React from 'react'
import Hero from '../components/Hero'
import {CssBaseline} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {grey, indigo, teal} from '@mui/material/colors'

const Home = () => {
    const getDesignTokens = (mode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // palette values for light mode
                    primary: indigo,
                    secondary: indigo,
                    divider: indigo[200],
                    text: {
                        primary: grey[900],
                        secondary: grey[800],
                    },
                }
                : {
                    // palette values for dark mode
                    primary: teal,
                    secondary: teal,
                    divider: teal[700],
                    background: {
                        default: '#0E0B16',
                        paper: '#0E0B16',
                    },
                    text: {
                        primary: '#fff',
                        secondary: grey[500],
                    },
                }),
        },
    });

    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );

    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme/>
                <Hero/>
            </ThemeProvider>
        </>
    )
}

export default Home
