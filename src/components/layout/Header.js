import React from 'react'
import useWindowDimention from '../../helpers/useWindowDimention'

import Navigation from './Navigation'
import HeaderSmall from './HeaderSmall'
import UpperHeader from './UpperHeader'

const Header = () => {
	const {width, height} = useWindowDimention()

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
