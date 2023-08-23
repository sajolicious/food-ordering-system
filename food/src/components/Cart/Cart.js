import React from 'react'
import classes from './Cart.module.css'
const Cart = () => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 1, name: 'hello', amount: 2, price: 12.65 }]}
    </ul>
  )
  return (
    <div>
      <cartItems />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <button className={classes['button--alt']}>close</button>
      <button className={classes.button}>Order</button>
    </div>
  )
}

export default Cart
