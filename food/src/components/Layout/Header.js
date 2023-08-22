import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import food from '../../assets/food.jpg';
import classes from './Header.module.css';
const Header = (props) => {
  return (
    <React.Fragment >
      <header className={classes.header}>
      <h1>Good Food</h1>
      <HeaderCartButton/>
      </header>
      <div className={classes.mainImage}>
      <img src={food} alt="Good Food"/>
      </div>
    </React.Fragment>
  )
}

export default Header
 