import React from 'react'

const CustomTab = (props) => {

	const handleClick = () => {
		props.handleSelect(props.index)
	}

	return(
		<div onClick={handleClick} className={'tab-item'} >
			<img src={props.bg} alt='backgroundImage' className='bg-img' />
			<img src={props.img} alt='basket' className='basket-page-icon-tab' />
			<div className='text'>{props.text}</div>
		</div>
	)
}

export default CustomTab
