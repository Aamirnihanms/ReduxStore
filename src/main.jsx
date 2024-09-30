import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import cartstore from './redux/cartstore.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={cartstore}>
    <BrowserRouter> 
     <App />
    </BrowserRouter>
  </Provider>
  </StrictMode>,
)
