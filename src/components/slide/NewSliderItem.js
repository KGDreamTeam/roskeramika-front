import React from 'react'

import basketMini from '../../assets/img/basket-mini.svg'

const NewSliderItem = (props) => {
	return(
		<div className='new-slider-item'>
			{
				props.burn ? (
					<div className='burn-price'>
						Горящая цена
					</div> 
				) : null
			}
			<div className='content'>
				<div className='image-wrapper'>
					<img src={props.img} alt='imageFrom props' />
				</div>
				<div className='name-wrapper'>
					<div className='name'>{props.name}</div>
					<div className='to-basket'>
						<img src={basketMini} alt='basket' className='basket-mini' />
						в корзину
					</div>
				</div>
				<div className='price-wrapper'>
					<div className='price-pr'>Цена:</div>
					<div className='price'>{props.price} C</div>
				</div>
			</div>
		</div>
	)
}

export default NewSliderItem
