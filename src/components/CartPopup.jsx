import { useContext } from 'react';
import { ShopContext } from '../context';
import { CartPopupItem } from './CartPopupItem';

function CartPopup () {
  const {orders = [], popupShow = false, isShowCart} = useContext(ShopContext);

  return <div className={popupShow ? 'overlay active' : 'overlay'}>
  <div className="popup">
    <button className="close" onClick={isShowCart}><i className="material-icons">close</i></button>
    <h2>Корзина</h2>
    {(orders.length) ? <ul className="collection">{orders.map(item => <CartPopupItem key={item.id} {...item} />)}</ul> : ''}
    <h4>Итого: {orders.reduce((sum, item) => {
          return sum + (item.quantity*item.price)
      }, 0)} руб.</h4>
  </div>
</div>
}

export {CartPopup}