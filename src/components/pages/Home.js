import React from 'react'

import banner from '../../assets/img/Banner.svg'

import NewSlider from '../../containers/NewSlider'

const Home = () => {
	return(
		<div className='home'>
			<img src={banner} className='banner' alt='banner'/>
			<NewSlider />
		</div>
	)
}

export default Home
