import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop/Shop.jsx'
import Success from './pages/Success/Success.jsx'

const App = () => {

  return (
    <CartProvider>
      <div className='container-xl'>
        <Navbar />
        <Routes>
          <Route index element={<Shop />} />
          <Route path={'/success'} element={<Success />} />
        </Routes>
      </div>
    </CartProvider>
  )
}

export default App
