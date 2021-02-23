import React from 'react'
import {useSelector} from 'react-redux'
import Tabs from '../../containers/Tabs'

const Basket = () => {

	const {items} = useSelector(state => ({
		items: state.basket.items
	}))

	return(
		<div className='basket-page'>
			<div className='page-wrapper'>
				<Tabs />
			</div>
		</div>
	)
}


export default Basket
