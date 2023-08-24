import React from 'react'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
const HeaderCartButton = (props) => {
  const cartCtsx = useContext(CartContext)

  const numberOfCarItems = cartCtsx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCarItems}</span>
    </button>
  )
}

export default HeaderCartButton
