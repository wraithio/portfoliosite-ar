import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CursorComponent from './components/CursorComponent.jsx'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <CursorComponent/> */}
    <Analytics/>
  </StrictMode>,
)
