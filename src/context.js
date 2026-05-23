import { createContext, useReducer } from 'react';
import { reducer } from './reducer'

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  orders: [],
  popupShow: false
};

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToCart = (goodId, goodName, goodPrice) => dispatch({type: 'ADD_TO_CART', payload: {id: goodId, name: goodName, price: goodPrice}});
  value.isShowCart = () => dispatch({type: 'IS_SHOW_CART'});
  value.deleteFromCart = (goodId) => dispatch({type: 'DELETE_FROM_CART', payload: {id: goodId}});
  value.editQuantityFromCart = (goodId, quantity) => dispatch({type: 'EDIT_QUANTITY_FROM_CART', payload: {id: goodId, quantity: quantity}});
  value.setGoods = (goods) => dispatch({type: 'SET_GOODS', payload: {items: goods}});

  return <ShopContext value={value}>{children}</ShopContext>
}