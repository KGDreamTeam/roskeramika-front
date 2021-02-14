import React from 'react'
import {useSelector} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'

import wats from '../../assets/img/wats.svg'
import upArr from '../../assets/img/upArr.svg'

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
							<Link to={`/category/${item.id}`} className='item'>
								{item.name}
								<div className='sub-item-wrapper'>
									{
										subCategories && subCategories.map(sub => {
											if(sub.category === item.id){
												return(
													<Link to={`/sub/${sub.id}`} className='sub-item'>
														{sub.name}
													</Link>
												)
											}
										})
									}
								</div>
								<img src={upArr} alt='arr' className='arr' />
							</Link>
						))
					}
					<NavLink to='/about' className='item-link'>О нас</NavLink>
				</div>
				<div className='right'>
					<div className='watsapp'>
						<img src={wats} alt='watsapp' className='wats-icon' />
						<div className='text'>
							Напишите нам
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
