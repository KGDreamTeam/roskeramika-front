import React, {useState} from 'react'

import ShoppingCart from '../assets/img/shopping_basket1.svg'
import Edit from '../assets/img/edit1.svg'
import Car from '../assets/img/car.svg'
import yellowTabFirst from '../assets/img/yellow-tab-first.svg'
import yellowTabSecond from '../assets/img/yellow-tab-second.svg'
import greyTabFirst from '../assets/img/grey-tab-first.svg'
import greyTabSecond from '../assets/img/grey-tab-second.svg'

import CustomTab from '../components/reusable/CustomTab'
import PanelWithBasketItems from '../components/reusable/PanelWithBasketItems'

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0)

	const handleSelect = (index) => {
		setTabIndex(index)
	}

  return (
    <div className="tabs-all">
			<div className='tabs-wrapper'>
				<CustomTab
					bg={tabIndex === 0 ? yellowTabFirst : greyTabFirst}
					img={ShoppingCart}
					text="Корзина"
					index={0}
					handleSelect={handleSelect}
				/>
				<CustomTab
					bg={tabIndex === 1 ? yellowTabSecond : greyTabSecond}
					img={Edit}
					text="Оформление заказа"
					index={1}
					handleSelect={handleSelect}
				/>
				<CustomTab
					bg={tabIndex === 2 ? yellowTabSecond : greyTabSecond}
					img={Car}
					text="Доставка товара"
					index={2}
					handleSelect={handleSelect}
				/>
			</div>
			<div className='panels'>
				{
					tabIndex === 0 && (
						<PanelWithBasketItems />
					)
				}
			</div>
    </div>
  )
}

export default Tabs
