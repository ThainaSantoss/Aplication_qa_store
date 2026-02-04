import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import CheckoutForm from './components/CheckoutForm';
import CouponForm from './components/CouponForm';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  return (
  <>
     <div>
      <h1>Minha Loja</h1>
      <ProductList addToCart={addToCart}/>
      <ShoppingCart cartItems={cartItems} onCheckout={handleCheckout}/>
      {showCheckout && <CheckoutForm cartItems={cartItems} /> }
      <CouponForm/>
     </div>
  </>
  )

}

export default App
