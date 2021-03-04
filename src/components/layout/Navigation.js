import React from 'react'
import {useSelector} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'

import wats from '../../assets/img/wats.svg'
import BigLink from '../reusable/BigLink'

const Navigation = () => {

	const {categories} = useSelector(state => ({
		categories: state.kategori.categories
	}))

	return(
		<div className='nav'>
			<div className='container'>
				<div className='left'>
					{
						categories && categories.map(item => (
							<BigLink 
								name={item.name}
								id={item.id}
								key={item.id}
							/>
						))
					}
					<NavLink to='/about' className='item-link'>О нас</NavLink>
				</div>
				<div className='right'>
					<div className='watsapp'>
						<a href='tel:+996703411547'>
							<img src={wats} alt='watsapp' className='wats-icon' />
							<div className='text'>
								Напишите нам
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
