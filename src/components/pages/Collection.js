import React from 'react'

import CollectionInfo from '../templates/CollectionInfo'
import CollectionProducts from '../templates/CollectionProducts'
import BannerHeader from '../templates/BannerHeader'

import bannerImg from '../../assets/img/banner-header.svg'

const Collection = (props) => {
	return(
		<div className='collection'>
			<BannerHeader img={bannerImg} />
			<CollectionInfo
				id={props}
			/>
			<CollectionProducts />
		</div>
	)
}

export default Collection
