import React, {useState} from 'react'
import {useSelector} from 'react-redux'

import CollectionInfo from '../templates/CollectionInfo'
import CollectionProducts from '../templates/CollectionProducts'
import BannerHeader from '../templates/BannerHeader'

import bannerImg from '../../assets/img/banner-header.svg'
import CollectionMain from '../../assets/img/collection-main.svg'

const Collection = (props) => {

	const kategori = useSelector(state => state.kategori)

	const [collection] = useState({
		...kategori.filter(item => parseInt(item.id) === parseInt(props.match.params.id))
	})

	return(
		<div className='collection'>
			<BannerHeader img={bannerImg} />
			<CollectionInfo
				id={props.match.params}
				img={CollectionMain}
				name={collection[0].name}
				price={collection[0].price}
				manufacturer={collection[0].manufacturer}
				size={collection[0].size}
				surface={collection[0].surface}
				style={collection[0].style}
			/>
			<CollectionProducts items={[{id: 1, view: 'h', size: '2'}]} />
		</div>
	)
}

export default Collection
