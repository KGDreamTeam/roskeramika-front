import React from 'react'
import {useSelector} from 'react-redux'

import wats from '../../assets/img/wats.svg'
import upArr from '../../assets/img/upArr.svg'
import {NavLink} from 'react-router-dom'

const Navigation = () => {

	const {subCategories, categories} = useSelector(state => ({
		subCategories: state.kategori.subCategories,
		categories: state.kategori.categories
	}))

	return(
		<div className='nav'>
			<div className='container'>
				<div className='left'>
					{
						categories && categories.map(item => (
							<div className='item'>
								{item.name}
								<div className='sub-item-wrapper'>
									{
										subCategories && subCategories.map(sub => {
											if(sub.category === item.id){
												return(
													<div className='sub-item'>
														{sub.name}
													</div>
												)
											}
										})
									}
								</div>
								<img src={upArr} alt='arr' className='arr' />
							</div>
						))
					}
					<NavLink to='/about' className='item-link'>О нас</NavLink>
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
