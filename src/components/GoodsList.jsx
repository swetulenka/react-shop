import { useContext } from 'react';
import { ShopContext } from '../context';
import { GoodsItem } from './GoodsItem';

function GoodsList(props) {  
  const {goods = []} = useContext(ShopContext);
  if(!goods.length) return <div>Nothing goods</div> 
  return <>
    {goods.map(item => <GoodsItem key={item.id} {...item} />)}
  </>
}

export {GoodsList}