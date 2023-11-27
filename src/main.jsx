import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Search from './Components/Search.jsx'
import Sidebar from './Components/Sidebar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='app'>
        
        <Sidebar />
        <Routes>
          <Route element={<App />} path='/' />
          <Route element={<Search />} path='/search' />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
