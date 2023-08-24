import React from 'react'
import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateState = state.items.concat(action.item)
    const updatedTotalAmount =
      state.totalAmount + action.type.price * action.item.amount
    return {
      items: updateState,
      totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState
}
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  const removeItemToCartHandler = (id) => {}

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
