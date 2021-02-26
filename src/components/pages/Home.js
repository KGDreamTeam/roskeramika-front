import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import banner from '../../assets/img/Banner.svg'

import NewSlider from '../../containers/NewSlider'
import PopularSlider from '../../containers/PopularSlider'
import SalesSlider from '../../containers/SalesSlider'
import {handleGetAllCollections} from '../../store/actions/sliders'

const Home = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(handleGetAllCollections())
	}, [])

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
