import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AnimatePresence>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter > */}
  </AnimatePresence>
  // </StrictMode>,
)
