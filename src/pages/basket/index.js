import React, {useEffect} from 'react'
import Tabs from '../../containers/Tabs'

const Basket = () => {

	useEffect(() => {
		document.title = "Корзина"
	}, [])

	return(
		<div className='basket-page'>
			<div className='page-wrapper'>
				<Tabs />
			</div>
		</div>
	)
}


export default Basket
