import React from 'react'

import banner from '../../assets/img/Banner.svg'

import NewSlider from '../../containers/NewSlider'
import PopularSlider from '../../containers/PopularSlider'
import SalesSlider from '../../containers/SalesSlider'

const Home = () => {
	return(
		<div className='home'>
			<img src={banner} className='banner' alt='banner'/>
			<NewSlider />
			<SalesSlider />
			<PopularSlider />
		</div>
	)
}

export default Home
