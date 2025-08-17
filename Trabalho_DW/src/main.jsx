import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/App.css'
import Main from './componentes/links.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
