import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getMinPriceOfArr} from '../../helpers/persentCalc'
import {handleGetProductsOfColletionActionCreator} from '../../store/actions/collections'

import basketMini from '../../assets/img/basket-mini.svg'

const Collection = (props) => {
	const dispatch = useDispatch()
	const [price, setPrice] = useState(0)

	const handleToBasket = () => {
		dispatch(handleGetProductsOfColletionActionCreator(props.id))
	}

	useEffect(() => {
		setPrice(getMinPriceOfArr(props.products))
	}, [])

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
								onClick={handleToBasket}
							>
								<img src={basketMini} alt='basket' className='basket-mini' />
								в корзину
							</div>
						)
					}
				</div>
				<div className='collection-information-price-wrapper'>
					<div className='price-text'>Цена</div>
					<div className='price'>{price}</div>
				</div>
			</div>
			<div className=''>

			</div>
		</div>
	)
}

export default Collection
