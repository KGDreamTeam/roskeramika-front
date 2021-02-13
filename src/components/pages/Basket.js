import React, {useState} from 'react'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

import ShoppingCart from '../../assets/img/shopping_basket1.svg'
import Edit from '../../assets/img/edit1.svg'
import Car from '../../assets/img/car.svg'

const Basket = () => {

	return(
		<div className='basket-page'>
			<div className='page-wrapper'>
				<Tabs>
					<TabList className='tabs'>
						<CustomTab img={ShoppingCart} text='Корзина' />
						<CustomTab img={Edit} text='Оформление заказа' />
						<CustomTab img={Car} text='Доставка товара' />
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
		<Tab className={'tab-item'}>
			<img src={props.img} alt='basket' className='basket-page-icon-tab' />
			<div>{props.text}</div>
		</Tab>
	)
}

CustomTab.tabsRole = 'Tab'

export default Basket
