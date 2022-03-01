import Hero from '../components/Hero'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Home = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Hero />
      </ThemeProvider>
    </>
  )
}

export default Home
