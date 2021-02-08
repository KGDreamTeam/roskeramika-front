import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import CollectionInfo from '../templates/CollectionInfo'
import CollectionProducts from '../templates/CollectionProducts'
import BannerHeader from '../templates/BannerHeader'

import bannerImg from '../../assets/img/banner-header.svg'

const Collection = (props) => {

	const {kategori, products} = useSelector(state => ({
		kategori: state.kategori,
		products: state.products
	}))

	useEffect(() => {
		console.log(props)
	}, [])

	return(
		<div className='collection'>
			<BannerHeader img={bannerImg} />
			<CollectionInfo
				id={props.match.params}
				
			/>
			<CollectionProducts />
		</div>
	)
}

export default Collection
