import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FormContextProvider } from './contexts/FormContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>
)
