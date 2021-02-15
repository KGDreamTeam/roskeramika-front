import React, {useState} from 'react'
import Slider from 'react-slick'
import useWindowDimension from '../helpers/useWindowDimension'

import SalesSliderItem from '../components/slide/SalesSliderItem'

import slideImg from '../assets/img/sales-mini.svg'

const SalesSlider = () => {

	const {width} = useWindowDimension()

	const [items] = useState([
		{id: 1, name: 'Solar', price: 300.90, sales: 80}, 
		{id: 2, name: 'Solar', price: 200.90, sales: 20}, 
		{id: 3, name: 'Solar', price: 730.90, sales: 15}, 
		{id: 4, name: 'Solar', price: 100.90, sales: 16}, 
		{id: 5, name: 'Solar', price: 400.90, sales: 40}
	])

	var settings = {
		dots: false,
		arrows: true,
    infinite: false,
    speed: 500,
		slidesToShow: width < 720 ? 1 : width < 1000 ? 2 : 3,
		slidesToScroll: 1,
		className: 'sales-slider'
  }
  return (
		<div className='sales-slider-main'>
			<div className='container'>
				<h2 className='title'>Скидки:</h2>
				<h3 className='sub-title'>Самые выгодные предложения!</h3>
				<Slider {...settings}>
					{
						items.map(item => (
							<SalesSliderItem 
								key={item.id}
								img={slideImg}
								name={item.name}
								price={item.price}
								sales={item.sales}
							/>
						))
					}
				</Slider>
			</div>
		</div>
  )
}

export default SalesSlider
