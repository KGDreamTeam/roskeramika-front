import React from 'react'

import icBasket from '../assets/img/ic_bascket.svg'
 
const Basket = () => {
	return(
		<div className='basket'>
			<img src={icBasket} className='ic-basket' alt='ic-basket' />
			Корзина
		</div>
	)
}

export default Basket
