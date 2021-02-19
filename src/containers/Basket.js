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
								<div className='basket-dropdown-item'>
									<div className='cart-img-wrapper'>
										<img src={item.image1} alt='carts item' className='cart-img' />
									</div>
									<span className='text'>{item.name} {item.artikul}</span>
								</div>
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

export default Basket
