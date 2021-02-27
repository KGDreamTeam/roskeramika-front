import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

import icBasket from '../assets/img/ic_bascket.svg'
import useWindowDimensions from '../helpers/useWindowDimension'
 
const Basket = () => {
	const [show, setShow] = useState(false)
	const basket = useSelector(state => state.basket)
	const {width} = useWindowDimensions()

	return(
		<div className='basket' onClick={() => setShow(!show)}>
			<img src={icBasket} className='ic-basket' alt='ic-basket' />
			{
				basket.items.length !== 0 ? (
					<div className='ic-basket-count'>{basket.items.length}</div> 
				) : null
			}
			{
				width < 820 ? null : 'Корзина'
			}
			{			
				show ? (
					<div className='basket-dropdown'>
						{
							basket.items.length !== 0 ? basket.items.map(item => (
								<BasketMiniItem 
									key={item.name}
									image={item.image1}
									name={item.name}
									artikul={item.artikul}
								/>
							)) : (
								<div>ничего нету</div>
							)
						}
						<NavLink to='/basket' className='offer'>оформить заказ</NavLink>
					</div>
				) : null
			}
		</div>
	)
}

const BasketMiniItem = (props) => {
	return(
		<div className='basket-dropdown-item'>
			<div className='cart-img-wrapper'>
				<img src={props.image} alt='carts item' className='cart-img' />
			</div>
			<span className='text'>{props.name} {props.artikul}</span>
		</div>
	)
}

export default Basket
