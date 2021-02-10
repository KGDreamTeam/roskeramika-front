import React, {useState} from 'react'

const CollectionProduct = (props) => {

	const [quantity, setQuantity] = useState(0)

	const changeHandler = (e) => {
		setQuantity(e.target.value)
	}

	const minusHandler = () => {
		setQuantity(prev => prev - 1)
	}

	const plusHandler = () => {
		setQuantity(prev => prev + 1)
	}

	return(
		<div className='collection-product'>
			<div className='image-wrapper'>
				<img src={props.img} alt='image of product' className='image-product' />
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
					Количество: 
					<button disabled={quantity <= 0 ? true : false} className='minus' onClick={minusHandler}>-</button>
					<input 
						value={quantity}
						type='number'
						min='0'
						onChange={e => changeHandler(e)}
					/>
					<button className='plus' onClick={plusHandler}>+</button>
				</div>
				<div className='dots'></div>
			</div>
		</div>
	)
}

export default CollectionProduct
