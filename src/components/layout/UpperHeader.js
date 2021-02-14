import React from 'react'

import rosGrand from '../../assets/img/ros-grand.svg'
import icDesign from '../../assets/img/ic_design.svg'

import Search from '../../containers/Search'
import Basket from '../../containers/Basket'

const UpperHeader = () => {
	return(
		<div className='upper-header'>
			<div className='wrapper'>
				<div className='grand-comfort'>
					<img alt='rosGrand' className='ros-grand' src={rosGrand} />
				</div>
				<Search />
				<div className='design'>
					<img alt='design' src={icDesign} className='ic-design' />
					Заказать бесплатный дизайн
				</div>
				<Basket />
			</div>
		</div>
	)
}

export default UpperHeader
