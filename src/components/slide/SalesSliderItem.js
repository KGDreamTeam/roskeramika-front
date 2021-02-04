import React, {useState, useEffect} from 'react'

import basketMini from '../../assets/img/basket-mini.svg'

const SalesSliderItem = (props) => {

	const [price, setPrice] = useState(0)

	useEffect(() => {
		const doublePrice = props.price - ((props.price / 100) * props.sales)

		setPrice(Math.round(doublePrice))
	}, [])

	return(
		<div className='sales-slider-item'>
			<div className='sales-price'>
				<div className='sales-procent'>-{props.sales}%</div>
				<div className='p'>Скидка</div>
			</div> 
			<div className='content'>
				<div className='image-wrapper'>
					<img src={props.img} alt='imageFrom props' className='sales-image' />
					<div className='name-wrapper'>
						<div className='name'>{props.name}</div>
						<div className='to-basket'>
							<img src={basketMini} alt='basket' className='basket-mini' />
							в корзину
						</div>
					</div>
					<div className='fade'> </div>
				</div>
				<div className='price-wrapper'>
					<div className='before-sales'>
						<div className='price-pr'>Цена:</div>
						<div className='price'>{props.price} C</div>
						<div className='red-line'> </div>
					</div>
					<div className='after-sales'>
						<div className='price-p'>Цена со скидкой:</div>
						<div className='price-with-sales'>{price} C</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SalesSliderItem
