import React from 'react'
import Terminal from '../components/Terminal'
import { CssBaseline } from '@mui/material'
import { styled } from '@mui/material/styles'
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from '../contexts/ThemeContext'

const Home = () => {
    const { mode, toggleColorMode } = useThemeContext();

    return (
        <>
            <CssBaseline enableColorScheme/>
            <ColorModeButton onClick={toggleColorMode}>
                {mode === 'light' ? <DarkModeIcon/> : <LightModeIcon/>}
            </ColorModeButton>
            <Terminal />
        </>
    )
}

const ColorModeButton = styled(IconButton)(() => ({
    position: 'fixed',
    top: 10,
    right: 20,
    zIndex: 1001,
}))

export default Home
