import React, {useState} from 'react'
import {Tabs, TabList, TabPanel} from 'react-tabs'
import {useSelector} from 'react-redux'

import ShoppingCart from '../../assets/img/shopping_basket1.svg'
import Edit from '../../assets/img/edit1.svg'
import Car from '../../assets/img/car.svg'
import yellowTabFirst from '../../assets/img/yellow-tab-first.svg'
import yellowTabSecond from '../../assets/img/yellow-tab-second.svg'
import greyTabFirst from '../../assets/img/grey-tab-first.svg'
import greyTabSecond from '../../assets/img/grey-tab-second.svg'
import CustomTab from '../reusable/CustomTab'

const Basket = () => {

	const [tabIndex, setTabIndex] = useState(0)
	const {items} = useSelector(state => ({
		items: state.basket.items
	}))

	return(
		<div className='basket-page'>
			<div className='page-wrapper'>
				<Tabs
					selectedIndex={tabIndex}
					onSelect={index => setTabIndex(index)}
				>
					<TabList className='tabs'>
						<CustomTab 
							bg={tabIndex === 0 ? yellowTabFirst : greyTabFirst} 
							img={ShoppingCart} 
							text='Корзина' 
						/>
						<CustomTab 
							bg={tabIndex === 1 ? yellowTabSecond : greyTabSecond} 
							img={Edit} 
							text='Оформление заказа' 
						/>
						<CustomTab 
							bg={tabIndex === 2 ? yellowTabSecond : greyTabSecond} 
							img={Car} 
							text='Доставка товара' 
						/>
					</TabList>
					<TabPanel className='tab-panel-item-first'>
						<div className='items'>
							{
								items.length !== 0 ? items.map(item => (
									<div key={item.id} className='cart-item'>
										<h2>{item.subcategorie.name} {item.name} ({item.artikul})</h2>
										<div className='cart-item-infos'>
											<div className='image-wrapper'>
												<img src={item.image1} className='cart-item-img' alt='product of cart'/>
											</div>
											<div className='infos-wrapper'>
												<div className='manufac-wrapper'>
													<div className='manufac-text'>Производитель:</div>
													<div className='manufac'>{item.manufacturer.company_name}</div>
												</div>
												<div className='size-wrapper'>
													<div className='size-text'>Размер:</div>
													<div className='size'>{item.size}</div>
												</div>
												<div className='surface-wrapper'>
													<div className='surface-text'>Поверхность:</div>
													<div className='surface'>{item.surface}</div>
												</div>
												<div className='count-wrapper'>
													<div className='count-text'>Количество</div>
													<div className='count-logic'>
														<button >-</button>
														<input />
														<button>+</button>
													</div>
													<span>2m</span>
												</div>
											</div>
										</div>
									</div>
								)) : <div>нету товаров</div>
							}
						</div>
					</TabPanel>
					<TabPanel className='tab-panel-item-second'>
						hi
					</TabPanel>
					<TabPanel className='tab-panel-item-third'>
						i
					</TabPanel>
				</Tabs>
			</div>
		</div>
	)
}


export default Basket
