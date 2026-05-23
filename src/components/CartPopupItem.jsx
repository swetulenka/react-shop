import { useContext } from 'react';
import { ShopContext } from '../context';

function CartPopupItem (props) {
  const {deleteFromCart, editQuantityFromCart} = useContext(ShopContext);

  const {id, 
        name, 
        price, 
        quantity
    } = props;
  return <li className="collection-item">
      <span className="title">{name}</span>
      <div>{price} x <i onClick={() => editQuantityFromCart(id, quantity - 1)} className="material-icons small">keyboard_arrow_left</i>{quantity}<i className="material-icons small" onClick={() => editQuantityFromCart(id, quantity + 1)}>keyboard_arrow_right</i> = {price * quantity} руб.</div>
      <button className="right" onClick={() => deleteFromCart(id)}><i className="material-icons">delete</i></button>
    </li>
}

export {CartPopupItem}