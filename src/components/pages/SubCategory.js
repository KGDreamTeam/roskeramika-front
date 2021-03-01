import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {handleGetSubCollectionsActionCreator} from '../../store/actions/collections'

import BannerHeader from '../templates/BannerHeader'
import Collection from '../templates/Collection'

import banner from '../../assets/img/banner-header.svg'

const SubCategory = (props) => {
	const {sub, newCollections, hitCollections, otherCollections} = useSelector(state => ({
		sub: state.kategori.subCategories,
		newCollections: state.collections.newCollections,
		hitCollections: state.collections.hitCollections,
		otherCollections: state.collections.otherCollections
	}))
	const dispatch = useDispatch()

	const [title, setTitle] = useState('')

	useEffect(() => {
		for(let i = 0; i < sub.length; i++){
			if(parseInt(sub[i].id) === parseInt(props.match.params.id)){
				setTitle(sub[i].name)
			}
		}
		dispatch(handleGetSubCollectionsActionCreator(props.match.params.id))
	}, [sub, props.match.params.id])

	return(
		<div className='sub-category-page'>
			<BannerHeader img={banner} />
			<div className='sub-category-page-wrapper'>
				<div className='background'>
					<div className='container-width'>
						<h2 className='sub-title'>{title}</h2>
						<div className='sub-collections-wrapper'>
							<h4 className='coll-mini-title'>Новинки:</h4>
							<div className='sub-collections'>
								{
									newCollections ? newCollections.map(item => (
										<Collection 
											img={item.image1} 
											labelnew={item.labelnew} 
											name={item.name}
											key={item.id}
											id={item.id}
											sales={item.discount}
											products={item.products}
										/>
									)) : <div className='no-items'>more</div>
								}
							</div>
						</div>
					</div>
				</div>
				<div className='sales-hits-wrapper'>
					<h4 className='coll-mini-title'>Хиты продаж:</h4>
					<div className='sales-hits'>
						{
							hitCollections ? hitCollections.map(item => (
								<Collection 
									img={item.image1} 
									labelnew={item.labelnew}
									price={item.price}
									name={item.name}
									key={item.id}
									id={item.id}
									sales={item.discount}
									products={item.products}
								/>
							)) : <div className='no-items'>more</div>
						}
					</div>
				</div>
				<div className='others-wrapper'>
					<h4 className='coll-mini-title'>Остальные:</h4>
					<div className='others'>
						{
							otherCollections ? otherCollections.map(item => (
								<Collection 
									img={item.image1} 
									labelnew={item.labelnew}
									price={item.price}
									name={item.name}
									key={item.id}
									id={item.id}
									sales={item.discount}
									products={item.products}
								/>
							)) : <div className='no-items'>more</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SubCategory
