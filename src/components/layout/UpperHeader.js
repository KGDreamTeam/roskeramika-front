import React from 'react'
import Basket from '../../containers/Basket'

import rosGrand from '../../assets/img/ros-grand.svg'

const UpperHeader = () => {
	return(
		<div className='upper-header'>
			<div className='grand-comfort'>
				<img alt='rosGrand' className='ros-grand' src={rosGrand} />
			</div>
			<div className='search'>
				search
			</div>
			<div className='design'>design</div>
			<Basket />
		</div>
	)
}

export default UpperHeader
