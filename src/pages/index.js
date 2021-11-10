import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import NewSlider from '../containers/NewSlider'
import PopularSlider from '../containers/PopularSlider'
import SalesSlider from '../containers/SalesSlider'
import {handleGetAllCollections} from '../store/actions/sliders'

const Home = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(handleGetAllCollections())
    document.title = "Росскерамика"
  }, [])

  return(
    <div className='home'>
      <img src={"/Banner.svg"} alt="banner" className="banner" />
      <NewSlider />
      <SalesSlider />
      <PopularSlider />
    </div>
  )
}

export default Home
