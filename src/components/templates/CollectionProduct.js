import React, {useState} from 'react'

const CollectionProduct = (props) => {

	const [quantity, setQuantity] = useState(0)
	const [price, setPrice] = useState(0.0)

	const changeHandler = (e) => {
		setQuantity(e.target.value)
	}

	const minusHandler = () => {
		setQuantity(prev => prev - 1)
	}

	const plusHandler = () => {
		setQuantity(prev => prev + 1)
	}

	const offerHandler = () => {
		console.log('offering')
	}

	return(
		<div className='collection-product'>
			<div className='image-wrapper'>
				<img src={props.img} alt='product' className='image-product' />
			</div>
			<div className='product-wrapper'>
				<div className='type-wrapper'>
					<div className='type-text'>Тип:</div>
					<div className='type'>{props.type}</div>
				</div>
				<div className='view-wrapper'>
					<div className='view-text'>Вид:</div>
					<div className='view'>{props.view}</div>
				</div>
				<div className='size-wrapper'>
					<div className='size-text'>Размер:</div>
					<div className='size'>{props.size}</div>
				</div>
				<div className='dots'></div>
				<div className='quantity-wrapper'>
					<span className='quantity'>Количество:</span>
					<button disabled={quantity <= 0 ? true : false} className='minus' onClick={minusHandler}>-</button>
					<input 
						value={quantity}
						type='number'
						min='0'
						className='input-quantity'
						onChange={e => changeHandler(e)}
					/>
					<button className='plus' onClick={plusHandler}>+</button>
					<span className='m'>m<sup className='sup'>2</sup></span>
				</div>
				<div className='dots'></div>
				<div className='price-wrapper'>
					<div className='price-text'>Цена:</div>
					<div className='price'>{price}<span className='som'>Сом</span></div>
				</div>
				<button className='btn-offer' onClick={offerHandler}>оформить заказ</button>
			</div>
		</div>
	)
}

export default CollectionProduct
