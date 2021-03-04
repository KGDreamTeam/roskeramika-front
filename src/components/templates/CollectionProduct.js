import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {roundCalculationMinus, roundCalculationPlus} from '../../helpers/roundCalculation'
import {pushItemToBasket} from '../../store/actions/basket'

const CollectionProduct = (props) => {
	const dispatch = useDispatch()

	const [quantity, setQuantity] = useState(0)
	const [price, setPrice] = useState(0.0)

	const changeHandler = (e) => {
		setQuantity(e.target.value)
	}

	const minusHandler = () => {
		setQuantity(prev => roundCalculationMinus(prev))
	}

	const plusHandler = () => {
		setQuantity(prev => roundCalculationPlus(prev))
	}

	const offerHandler = () => {
		dispatch(pushItemToBasket([{...props}]))
	}

	useEffect(() => {
		setPrice(props.price)
	}, [])

	return(
		<div className='collection-product'>
			<div className='image-wrapper'>
				<img src={props.image1} alt='product' className='image-product' />
			</div>
			<div className='product-wrapper'>
				<div className='type-wrapper'>
					<div className='type-text'>Тип:</div>
					<div className='type'>{props.material}</div>
				</div>
				<div className='view-wrapper'>
					<div className='view-text'>Вид:</div>
					<div className='view'>{props.surface}</div>
				</div>
				<div className='size-wrapper'>
					<div className='size-text'>Размер:</div>
					<div className='size'>{`${props.width}x${props.length}`}</div>
				</div>
				<div className='dots'></div>
				<div className='quantity-wrapper'>
					<span className='quantity'>Количество:</span>
					<button disabled={quantity <= 0 ? true : false} className='minus' onClick={minusHandler}>-</button>
					<input 
						value={quantity}
						type='number'
						min={0}
						className='input-quantity'
						onChange={e => changeHandler(e)}
						step={0.01}
					/>
					<button className='plus' onClick={plusHandler}>+</button>
					<span className='m'>m<sup className='sup'>2</sup></span>
				</div>
				<div className='dots'></div>
				<div className='price-wrapper'>
					<div className='price-text'>Цена:</div>
					<div className='price'>{props.price}<span className='som'>Сом</span></div>
				</div>
				<NavLink
					to='/basket'
					className='btn-offer' 
					onClick={offerHandler} 
					disabled={quantity <= 0 ? true : false}
				>
					оформить заказ
				</NavLink>
			</div>
		</div>
	)
}

export default CollectionProduct
