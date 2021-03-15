import React from 'react'
import {NavLink} from 'react-router-dom'

import whiteWhats from '../../assets/img/white-wats.svg'
import whiteInst from '../../assets/img/white-inst.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="info">
          <h4>Контактная информация:</h4>
					<a className="info-item" href='tel:+996555939993'>Тел: +996 (555) 93-99-93</a><br />
          <a className="info-item" href='mailto:rkaugrand@gmail.com'>Email: rkaugrand@gmail.com</a>
					<div className='soc-icons'>
						<a href='https://instagram.com/tech._insta_/' target='_blank'>
							<img src={whiteInst} alt='instagram' className='white-inst' />
						</a>
						<a href='https://api.whatsapp.com/send?phone=996703411547' target='_blank'>
							<img src={whiteWhats} alt='whatsapp' className='white-whats' />
						</a>
					</div>
        </div>
        <div className="info">
          <h4>Режим работы:</h4>
          <div className="info-item">с 9-00 до 18-00, без выходных.</div>
          <div className="info-item">
            Режим работы склада: с 9-00 до 17-00, суббота: c 9-00 до 16-00,
            воскресенье - выходной
          </div>
        </div>
        <div className="info">
          <h4>Каталог:</h4>
          <div className="info-item">Напольная плитка</div>
          <div className="info-item">Плитка для ванной</div>
          <div className="info-item">Плитка для кухни</div>
          <div className="info-item">Фасад</div>
          <div className="info-item">Керамогранит</div>
          <div className="info-item">Теплый пол</div>
          <div className="info-item">Ламинат</div>
        </div>
        <div className="info">
          <h4>Общая информация:</h4>
					<NavLink to='/about' className="info-item">О нас</NavLink>
          <div className="info-item">Оплата и доставка</div>
        </div>
      </div>
			<div className='last'>
				<div className='container'>
					Все права защищены © 2019
				</div>
			</div>
    </div>
  )
}

export default Footer
