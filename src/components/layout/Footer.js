import React from 'react'

import whiteWhats from '../../assets/img/white-wats.svg'
import whiteInst from '../../assets/img/white-inst.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="info">
          <h4>Контактная информация:</h4>
          <div className="info-item">Тел: +996 (555) 93-99-93</div>
          <div className="info-item">Тел: +996 (770) 93-99-93</div>
          <div className="info-item">Email: rkaugrand@gmail.com</div>
					<div className='soc-icons'>
						<img src={whiteInst} alt='instagram' className='white-inst' />
						<img src={whiteWhats} alt='whatsapp' className='white-whats' />
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
          <h4>Производители:</h4>
          <div className="info-item">Нефрит</div>
          <div className="info-item">ALMA CERAMICA</div>
          <div className="info-item">Gracia Ceramica</div>
          <div className="info-item">Азори</div>
          <div className="info-item">Unitile Lasselsberger</div>
          <div className="info-item">Grasaro</div>
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
