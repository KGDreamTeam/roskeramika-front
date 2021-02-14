import React, {useState} from 'react'
import Slider from 'react-slick'
import useWindowDimension from '../helpers/useWindowDimension'

import NewSliderItem from '../components/slide/NewSliderItem'
import slideImg from '../assets/img/slideItem.svg'

const NewSlider = () => {

	const {width, height} = useWindowDimension()

	const [items] = useState([
		{id: 1, name: 'Solar', price: 300.90}, 
		{id: 2, name: 'Solar', price: 30.90}, 
		{id: 3, name: 'Solar', price: 730.90}, 
		{id: 4, name: 'Solar', price: 100.90}, 
		{id: 5, name: 'Solar', price: 400.90}
	])

	var settings = {
		dots: false,
		arrows: true,
    infinite: false,
    speed: 500,
		slidesToShow: width < 600 ? 1 : width < 700 ? 2 : 3,
		slidesToScroll: 1,
		className: 'new-slider'
  }
  return (
		<div className='news-slider-main'>
			<div className='container'>
				<h2 className='title'>Новинки:</h2>
				<h3 className='sub-title'>Самые последние поступления:</h3>
				<Slider {...settings}>
					{
						items.map(item => (
							<NewSliderItem 
								key={item.id}
								img={slideImg}
								name={item.name}
								price={item.price}
							/>
						))
					}
				</Slider>
			</div>
		</div>
  )
}

export default NewSlider
