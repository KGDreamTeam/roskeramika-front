import React, {useEffect, useState} from 'react'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

import ShoppingCart from '../../assets/img/shopping_basket1.svg'
import Edit from '../../assets/img/edit1.svg'
import Car from '../../assets/img/car.svg'
import yellowTabFirst from '../../assets/img/yellow-tab-first.svg'
import yellowTabSecond from '../../assets/img/yellow-tab-second.svg'
import greyTabFirst from '../../assets/img/grey-tab-first.svg'
import greyTabSecond from '../../assets/img/grey-tab-second.svg'

const Basket = () => {

	const [tabIndex, setTabIndex] = useState(0)

	return(
		<div className='basket-page'>
			<div className='page-wrapper'>
				<Tabs
					selectedIndex={tabIndex}
					onSelect={index => setTabIndex(index)}
				>
					<TabList className='tabs'>
						<CustomTab bg={tabIndex === 0 ? yellowTabFirst : greyTabFirst} img={ShoppingCart} text='Корзина' />
						<CustomTab bg={tabIndex === 1 ? yellowTabSecond : greyTabSecond} img={Edit} text='Оформление заказа' />
						<CustomTab bg={tabIndex === 2 ? yellowTabSecond : greyTabSecond} img={Car} text='Доставка товара' />
					</TabList>
					<TabPanel>first 1</TabPanel>
					<TabPanel>second 2</TabPanel>
					<TabPanel>third 3</TabPanel>
				</Tabs>
			</div>
			plitki v vide flex-wrap
			obwaya stoimost bez ucheta dostavki
			oformit zakaz
		</div>
	)
}

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

export default Basket
