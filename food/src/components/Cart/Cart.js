import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart = () => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 1, name: 'hello', amount: 2, price: 12.65 }]}
    </ul>
  )
  return (
    <Modal>
      <cartItems/>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <button className={classes['button--alt']}>close</button>
      <button className={classes.button}>Order</button>
    </Modal>
  )
}

export default Cart
