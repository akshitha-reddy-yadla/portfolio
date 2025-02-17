import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AnimatePresence } from 'framer-motion';


createRoot(document.getElementById('root')).render(
  <AnimatePresence>
    <App />
  </AnimatePresence>
)
