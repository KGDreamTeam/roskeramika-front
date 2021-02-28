import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import BasketItem from './BasketItem'

const PanelWithBasketItems = () => {

	const items = useSelector(state => state.basket.items)
	const prices = useSelector(state => state.basket.itemsPrices)
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		let total = 0
		for(let i = 0; i < prices.length; i++){
			total += parseInt(prices[i].price)
		}
		setTotalPrice(total)
	}, [prices])

	return(
		<div className='panel-with-basket-items'>
			{
				items.length !== 0 ? items.map(item => (
					<BasketItem 
						id={item.id}
						subname={item.subcategorie.name}
						name={item.name}
						artikul={item.artikul}
						image={item.image1}
						manufac={item.manufacturer.company_name}
						surface={item.surface}
						length={item.length}
						width={item.width}
						price={item.price}
					/>
				)) : <div className='no-items'>Ваша корзина пуста, Вы можете выбрать товары в каталоге.</div>
			}
			<h3>Общая стоимость заказа (без учета доставки) {totalPrice} сомов</h3>
		</div>
	)
}

export default PanelWithBasketItems
