import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import CollectionInfo from '../templates/CollectionInfo'
import CollectionProducts from '../templates/CollectionProducts'
import BannerHeader from '../templates/BannerHeader'

import bannerImg from '../../assets/img/banner-header.svg'
import {handleGetOneCollectionActionCreator} from '../../store/actions/collections'

const Collection = (props) => {
	const dispatch = useDispatch()
	const collection = useSelector(state => state.collections.oneCollection)

	useEffect(() => {
		dispatch(handleGetOneCollectionActionCreator(props.match.params.id))
	}, [props.match.params.id])

	return(
		<div className='collection'>
			<BannerHeader img={bannerImg} />
			{
				collection ? (
					<CollectionInfo
						id={props.match.params.id}
						img={collection.image1}
						name={collection.name}
						products={collection.products}
						price={collection.price}
						size={collection.size}
						material={collection.material}
						manufacturer={collection.manufacturer}
						surface={collection.surface}
					/>
				) : null
			}
			{
				collection.products ? (
					<CollectionProducts 
						items={collection.products}
						collection={collection.name}
					/>
				) : null
			}
		</div>
	)
}

export default Collection
