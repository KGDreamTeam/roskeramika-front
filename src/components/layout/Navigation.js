import React, {useState} from 'react'

import wats from '../../assets/img/wats.svg'
import downArr from '../../assets/img/downArr.svg'
import upArr from '../../assets/img/upArr.svg'

const Navigation = () => {
	const [kerSubMenu, setKerSubMenu] = useState(false)
	const [proizSubMenu, setProizSubMenu] = useState(false)
	const [teplSubMenu, setTeplSubMenu] = useState(false)

	return(
		<div className='nav'>
			<div className='container'>
				<div className='left'>
					<div className='nav-wrapper'>
						<div 
							className='item' 
							onClick={() => setKerSubMenu(!kerSubMenu)}
						>
							Керамическая плитка
						{
							kerSubMenu ? <img src={upArr} alt='arr' className='arr' /> : <img src={downArr} alt='arr' className='arr' />
						}
						</div>

						{
							kerSubMenu ? (
							<div className='sub-item'>hello world</div>
						) : null}
					</div>

					<div className='nav-wrapper'>
						<div 
							className='item' 
							onClick={() => setProizSubMenu(!proizSubMenu)}
						>
							Производители
						{
							proizSubMenu ? <img src={upArr} alt='arr' className='arr' /> : <img src={downArr} alt='arr' className='arr' />
						}
						</div>

						{
							proizSubMenu ? (
							<div className='sub-item'>hello world</div>
						) : null}
					</div>

					<div className='nav-wrapper'>
						<div 
							className='item' 
							onClick={() => setTeplSubMenu(!teplSubMenu)}
						>
							Теплый пол и ламинат
						{
							teplSubMenu ? <img src={upArr} alt='arr' className='arr' /> : <img src={downArr} alt='arr' className='arr' />
						}
						</div>

						{
							teplSubMenu ? (
							<div className='sub-item'>hello world</div>
						) : null}
					</div>
					<div className='nav-wrapper'>
						<div className='item'>Оплата и доставка</div>
					</div>
				</div>
				<div className='right'>
					<div className='watsapp'>
						<img src={wats} alt='watsapp' className='wats-icon' />
						Напишите нам
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
