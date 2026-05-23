import { useEffect, useContext } from 'react';
import { ShopContext } from '../context'

import { apiUrl } from '../config';
import { Cart } from './Cart';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';
import { CartPopup } from './CartPopup';

function Main() {
	const {loading, setGoods} = useContext(ShopContext);
	
	useEffect(() => {
		fetch(apiUrl, {
			method: 'GET',
		})
			.then(res => res.json())
			.then(data => {
				let result = [];
				if (data.shop.length) {
					result = data.shop.map(item => ({
						id: item.mainId,
						name: item.displayName,
						img: item.displayAssets ? item.displayAssets[0] : '',
						price: item.price ? item.price.regularPrice : 0,
						description: item.displayDescription,
					}));
					setGoods(result);
				}
			})
			.catch(err => {
				console.error(err);
				setGoods([]);
			});
	}, [setGoods]);

	return (
		<div className='main container'>
			<CartPopup />
			<Cart />
			<div className='section'>
				{loading ? <Preloader /> : <GoodsList />}
			</div>
		</div>
	);
}

export { Main };
