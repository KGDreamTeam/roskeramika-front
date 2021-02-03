import React from 'react'
import Navigation from './Navigation'
import UpperHeader from './UpperHeader'

const Header = () => {
	return(
		<div className='header'>
			<UpperHeader />
			<Navigation />
		</div>
	)
}

export default Header
