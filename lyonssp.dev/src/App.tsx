import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Home />
      </Router>
    </ThemeProvider>
  );
}

export default App;
