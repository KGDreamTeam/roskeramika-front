import React, {useState} from 'react'

import Slider from 'react-slick'

const NewSlider = () => {
	const [items, setItems] = useState([{name: 'er'}, {name: 'he'}, {name: 'ra'}, {name: 'zx'}])

	var settings = {
    dots: true,
		arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
		slidesToScroll: 1,
		className: 'new-slider'
  }
  return (
		<div className='container'>
			<Slider {...settings}>
				{
					items.map(item => (
						<h2>{item.name}</h2>
					))
				}
			</Slider>
		</div>
  )
}

export default NewSlider
