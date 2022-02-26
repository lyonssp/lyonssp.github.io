import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Career from '../components/Career'
import Skills from '../components/Skills'
import { ThemeProvider } from 'styled-components'

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    console.log("toggle menu")
    setIsOpen(!isOpen)
  }

  const theme = {
    primary: '#6C63FF',
    secondary: '#8982FF',
    info: '#808080',

    background: '#FFFFFF',
    
    nav: '#738BFF',

    primaryHover: '#A6A1FF'
  }

  return (
    <>
        <ThemeProvider theme={theme}>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Career />
            <Skills />
        </ThemeProvider>
    </>
  )
}

export default Home
