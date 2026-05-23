import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart () {
  const {orders = [], isShowCart} = useContext(ShopContext);
  return <div className="cart" onClick={isShowCart}>
    <i className="medium material-icons">add_shopping_cart</i>
    <span>{orders.reduce((sum, item) => {
          return sum + item.quantity
      }, 0)}</span>
  </div>
}

export {Cart}