import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style/App.css'
import Main from './/componentes/links.jsx'
import Footer from './componentes/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
