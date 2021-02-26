import React from 'react'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'

import basketMini from '../../assets/img/basket-mini.svg'
import {handleGetProductsOfColletionActionCreator} from '../../store/actions/collections'

const NewSliderItem = (props) => {
	const dispatch = useDispatch()

	const hanldeToBasket = () => {
		dispatch(handleGetProductsOfColletionActionCreator(props.id))
	}

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
					<NavLink to={`/collection/${props.id}`}>
						<img src={props.img} alt='imageFrom props' />
					</NavLink>
				</div>
				<div className='name-wrapper'>
					<div className='name'>{props.name}</div>
					<div className='to-basket' onClick={hanldeToBasket}>
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
