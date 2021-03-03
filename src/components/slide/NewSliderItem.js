import React, {useEffect, useState} from 'react'
import LazyLoad from 'react-lazyload'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'

import basketMini from '../../assets/img/basket-mini.svg'
import {getMinPriceOfArr} from '../../helpers/persentCalc'
import {handleGetProductsOfColletionActionCreator} from '../../store/actions/collections'

const NewSliderItem = (props) => {
	const dispatch = useDispatch()
	const [price, setPrice] = useState(0)

	const hanldeToBasket = () => {
		dispatch(handleGetProductsOfColletionActionCreator(props.id))
	}
	useEffect(() => {
		setPrice(getMinPriceOfArr([...props.products]))
	}, [props.products])

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
						<LazyLoad 
							height={200} 
							once 
							offset={100} 
							placeholder="Image"
							style={{width: '300px', height: '155px', backgroundColor: 'grey'}}
						>
							<img src={props.img} alt='imageFrom props' />
						</LazyLoad>
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
					<div className='price'>{price} C</div>
				</div>
			</div>
		</div>
	)
}

export default NewSliderItem
