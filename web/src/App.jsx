import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };


  return (
  <>
     <div>
      <h1>Minha Loja</h1>
      <ProductList addToCart={addToCart}/>
      <ShoppingCart cartItems={cartItems} />
     </div>
  </>
  )
}

export default App
