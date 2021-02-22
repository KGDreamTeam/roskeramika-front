import React from 'react'
import {Tab} from 'react-tabs'

const CustomTab = (props) => {
	return(
		<Tab className={'tab-item'} >
			<img src={props.bg} alt='backgroundImage' className='bg-img' />
			<img src={props.img} alt='basket' className='basket-page-icon-tab' />
			<div className='text'>{props.text}</div>
		</Tab>
	)
}

CustomTab.tabsRole = 'Tab'

export default CustomTab
