import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {pushItemToSale, setTotalPrice} from '../../store/actions/basket'
import BasketItem from './BasketItem'

const PanelWithBasketItems = (props) => {

	const items = useSelector(state => state.basket.items)
	const prices = useSelector(state => state.basket.itemsPrices)
	const totalPrice = useSelector(state => state.basket.totalPriceToBuy)
	const dispatch = useDispatch()


	const handleClick = () => {
		props.handleSelect(props.index)
		const newItems = items.map(item => {
			return {
				...item,
				itemPrice: prices.find(x => x.id === item.id).price
			}
		})
		dispatch(pushItemToSale(newItems))
	}

	useEffect(() => {
		let total = 0
		for(let i = 0; i < prices.length; i++){
			total += parseInt(prices[i].price)
		}
		dispatch(setTotalPrice(total))
	}, [prices])

	return(
		<div className='panel-with-basket-items'>
			<div className='items'>
				{
					items.length !== 0 ? items.map(item => (
						<BasketItem 
							id={item.id}
							key={item.id}
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

			</div>
			<div className='main-info'>
				<h3>
					Общая стоимость заказа (без учета доставки) {totalPrice} сомов
				</h3>
				<button 
					className='make-order' 
					onClick={handleClick}
					disabled={items.length !== 0 ? false : true}
				>
					Оформить
				</button>

			</div>
		</div>
	)
}

export default PanelWithBasketItems
