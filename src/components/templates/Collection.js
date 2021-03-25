import React, {useState, useEffect} from 'react'
import LazyLoad from 'react-lazyload'
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
		setPrice(getMinPriceOfArr(props.products).toFixed(2))
	}, [])

	return(
		<div className='collection-for-page-wrapper'>
			<div className='image-wrapper'>
				<NavLink className='link-to-collection' to={`/collection/${props.id}`}>
					<LazyLoad 
						height={200} 
						once 
						offset={100}
					>
						<img src={props.img} alt='image of Collection' />
					</LazyLoad>
				</NavLink>
			</div>
			<div className='collection-information'>
				<div className='collection-information-name-wrapper'>
					<NavLink to={`/collection/${props.id}`} className='name'>{props.name}</NavLink>
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
					<div className='price'>от {price} C</div>
				</div>
			</div>
			<div className=''>

			</div>
		</div>
	)
}

export default Collection
