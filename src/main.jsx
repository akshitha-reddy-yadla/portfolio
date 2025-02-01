import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider  } from '@mui/material';
import './index.css'
import App from './App.jsx'

const THEME = createTheme({
  typography: {
    fontFamily: [
      'Courier New', 'Courier', 'monospace'
    ].join(','),
    subtitle1: {
      fontSize: 18,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
    },
    h6: {
      fontSize: 12,
      fontWeight: 100,
    }
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider  theme={THEME}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
