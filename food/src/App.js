import React,{useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
const App = () => {
const [CartIsShown, setcartIsShown]=useState(false)

const showCartHandler=()=>{
  setcartIsShown(true)
}
const hideCartHandler=()=>{
  setcartIsShown(false)
}
  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main><Meals/></main>
    </CartProvider>
  )
}

export default App
