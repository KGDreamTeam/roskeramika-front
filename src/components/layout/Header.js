import React from 'react'
import useWindowDimension from '../../helpers/useWindowDimension'

import Navigation from './Navigation'
import HeaderSmall from './HeaderSmall'
import UpperHeader from './UpperHeader'

const Header = () => {

	const {width, height} = useWindowDimension()

	return(
		<div className='header'>
			{
				width > 600 ? (
					<>
						<UpperHeader />
						<Navigation />
					</>
				) : (
					<>
						<HeaderSmall />
					</>
				)
			}
		</div>
	)
}

export default Header
