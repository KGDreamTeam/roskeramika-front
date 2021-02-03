import React, {useState} from 'react'
import Slider from 'react-slick'

import NewSliderItem from '../components/slide/NewSliderItem'
import slideImg from '../assets/img/slideItem.svg'

const NewSlider = () => {
	const [items, setItems] = useState([
		{name: 'Solar', price: 300.90}, 
		{name: 'Solar', price: 30.90}, 
		{name: 'Solar', price: 730.90}, 
		{name: 'Solar', price: 100.90}, 
		{name: 'Solar', price: 400.90}
	])

	var settings = {
		dots: false,
		arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
