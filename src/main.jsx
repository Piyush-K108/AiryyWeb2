import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Theme from './Theme.jsx'
import Loader from './Loader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loader/>
    <Theme/>
    <App />
  </React.StrictMode>,
)
