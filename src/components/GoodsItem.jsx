import { useContext } from 'react';
import { ShopContext } from '../context'

function GoodsItem(props) {  
  const {addToCart} = useContext(ShopContext);
  const {id, name, description, price, img} = props;

  return <div className="card" id={id}>
        <div className="card-image">
          <img src={img.background ? img.background : ''} alt={name} />
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className="btn" onClick={() => addToCart(id, name, price)}>В корзину</button>
          <span className="right">{price} руб.</span>
        </div>
      </div>
}

export {GoodsItem}