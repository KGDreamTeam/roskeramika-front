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
						manufac={item.manufacturer.name}
						surface={item.surface}
					/>
				)) : <div>no</div>
			}
		</div>
	)
}

export default PanelWithBasketItems
