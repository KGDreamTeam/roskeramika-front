import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import BannerHeader from '../templates/BannerHeader'

import banner from '../../assets/img/banner-header.svg'

const SubCategory = (props) => {
	const sub = useSelector(state => state.kategori.subCategories)

	const [title, setTitle] = useState('')

	useEffect(() => {
		for(let i = 0; i < sub.length; i++){
			if(parseInt(sub[i].id) === parseInt(props.match.params.id)){
				setTitle(sub[i].name)
			}
		}
	}, [sub])

	return(
		<div className='sub-category-page'>
			<BannerHeader img={banner} />
			<div className='sub-category-page-wrapper'>
				<h2 className='sub-title'>{title}</h2>
				<div className='sub-collections-wrapper'>
					<h4 className='coll-mini-title'>Новинки:</h4>
					<div className='sub-collections'>
						{
						}
					</div>
				</div>
				<div className='sales-hits-wrapper'>
					<h4 className='coll-mini-title'>Хиты продаж:</h4>
					<div className='sales-hits'>
						{
						}
					</div>
				</div>
				<div className='others-wrapper'>
					<h4 className='coll-mini-title'>Остальные:</h4>
					<div className='others'>
						{
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SubCategory
