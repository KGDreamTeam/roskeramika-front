import React from 'react'
import {NavLink} from 'react-router-dom'

import basketMini from '../../assets/img/basket-mini.svg'

const Collection = (props) => {

	const hanldeToBasket = () => {
		console.log('to basket')
	}

	return(
		<div className='collection-for-page-wrapper'>
			<div className='image-wrapper'>
				<NavLink className='link-to-collection' to={`/collection/${props.id}`}>
					<img src={props.img} alt='image of Collection' />
				</NavLink>
			</div>
			<div className='collection-information'>
				<div className='collection-information-name-wrapper'>
					<div className='name'>{props.name}</div>
					{
						props.labelnew ? (
							<div className='empty'></div>
						) : (
							<div 
								className='to-basket'
								onClick={hanldeToBasket}
							>
								<img src={basketMini} alt='basket' className='basket-mini' />
								в корзину
							</div>
						)
					}
				</div>
				<div className='collection-information-price-wrapper'>
					<div className='price-text'>Цена</div>
					<div className='price'>{props.price}</div>
				</div>
			</div>
			<div className=''>

			</div>
		</div>
	)
}

export default Collection
