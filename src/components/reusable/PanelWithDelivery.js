import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

const PanelWithDelivery = () => {
	return(
		<div className='panel-with-delivery'>
			<h3 className='mini-title'>Доставка и оплата:</h3>
			<p>Уважаемые клиенты, мы осуществляем доставку товара при покупке более 30м/кв, по Бишкеку - <strong>Бишкек</strong></p>
			<h4 className='micro-title'>Доставка в другие города:</h4>
			<div className='delivery-items'>
				<div>Токмок (по субботам)</div>
				<div className='price'>1500 c</div>
			</div>
			<div className='delivery-items'>
				<div>Кант </div>
				<div className='price'>800 c</div>
			</div>
			<div className='delivery-items'>
				<div>C.Ленинское</div>
				<div className='price'>600 c</div>
			</div>
			<div className='delivery-items'>
				<div>C.Новопавловка</div>
				<div className='price'>600 c</div>
			</div>
			<div className='delivery-items'>
				<div>C.Военно-Антоновка</div>
				<div className='price'>700 c</div>
			</div>
			<div className='delivery-items'>
				<div>C.Ново-Покровка</div>
				<div className='price'>400 c</div>
			</div>
			<div className='delivery-items'>
				<div>Г.Кара-Балта</div>
				<div className='price'>2000 c</div>
			</div>
			<h2>Адрес магазина:</h2>
		</div>
	)
}

export default PanelWithDelivery