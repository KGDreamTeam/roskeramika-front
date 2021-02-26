import React from 'react'
import {useSelector} from 'react-redux'
import BasketItem from './BasketItem'

const PanelWithBasketItems = () => {

	const items = useSelector(state => state.basket.items)

	return(
		<div className='panel-with-basket-items'>
			{
				items.length !== 0 ? items.map(item => (
					<BasketItem 
						subname={item.subcategorie.name}
						name={item.name}
						artikul={item.artikul}
						image={item.image1}
						manufac={item.manufacturer.company_name}
						surface={item.surface}
						size={`${item.width}x${item.length}`}
					/>
				)) : <div className='no-items'>Ваша корзина пуста, Вы можете выбрать товары в каталоге.</div>
			}
		</div>
	)
}

export default PanelWithBasketItems
