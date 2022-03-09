import React from 'react'
import Hero from '../components/Hero'
import {CssBaseline} from '@mui/material'
import {createTheme, styled, ThemeProvider} from '@mui/material/styles'
import {grey, indigo, teal} from '@mui/material/colors'
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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
    const toggleColorMode = () => {
        setMode((prevMode) =>
            prevMode === 'light' ? 'dark' : 'light',
        );
    }

    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme/>
                <ColorModeButton onClick={toggleColorMode}>
                    {mode === 'light' ? <DarkModeIcon/> : <LightModeIcon/>}
                </ColorModeButton>
                <Hero/>
            </ThemeProvider>
        </>
    )
}

const ColorModeButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    right: 20,
}))

export default Home
