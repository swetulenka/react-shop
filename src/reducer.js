export const reducer = (state, {type, payload}) => {
  switch(type) {
    case 'ADD_TO_CART':
      const existing = state.orders.find(i => i.id === payload.id);
      if(!existing)
        return {...state, 
               orders: [...state.orders, { id: payload.id, name: payload.name, price: payload.price, quantity: 1 }]};
      else 
        return {...state, 
                orders: state.orders.map(item =>
                item.id === payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item)};
    case 'DELETE_FROM_CART':
      return {...state,
              orders: state.orders.filter((item) => item.id !== payload.id)};

    case 'EDIT_QUANTITY_FROM_CART':
      if(payload.quantity >= 0) 
        return {...state, 
                orders: state.orders.map(item =>
                  item.id === payload.id
                    ? { ...item, quantity: payload.quantity }
                    : item)
              };
      else return state;
    
    case 'IS_SHOW_CART':
      return {...state,
              popupShow: !state.popupShow
      }

    case 'SET_GOODS':
      return {...state,
              goods: payload.items || [],
              loading: false
      }



    default:
      return state;
  }
}