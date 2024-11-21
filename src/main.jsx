// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { GetPokemon } from './GetPokemon'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <App />
    <GetPokemon/>
    </>
  // </StrictMode>,
)

