import React from 'react'

const CustomTab = (props) => {

	return(
		<div className={'tab-item'} >
			<img src={props.bg} alt='backgroundImage' className='bg-img' />
			<img src={props.img} alt='basket' className='basket-page-icon-tab' />
			<div className='text'>{props.text}</div>
		</div>
	)
}

export default CustomTab
