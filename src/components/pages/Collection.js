import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import CollectionInfo from '../templates/CollectionInfo'
import CollectionProducts from '../templates/CollectionProducts'
import BannerHeader from '../templates/BannerHeader'

import bannerImg from '../../assets/img/banner-header.svg'
import CollectionMain from '../../assets/img/collection-main.svg'

const Collection = (props) => {

	const collections = useSelector(state => state.collections)

	const [collection, setCollection] = useState({})

	useEffect(() => {
		if(collections){
			setCollection({
				...collections.filter(item => parseInt(item.id) === parseInt(props.match.params.id))
			})
		}
		console.log(collection)
	}, [collections])

	return(
		<div className='collection'>
			<BannerHeader img={bannerImg} />
			<CollectionInfo
				id={props.match.params}
				img={CollectionMain}
				name={collection[0].name ? 'hello' : 'hello'}
				price={collection[0].price ? 'hello' : 'hello'}
				manufacturer={collection[0].manufacturer ? 'hello' : 'hello'}
				size={collection[0].size ? 'hello' : 'hello'}
				surface={collection[0].surface ? 'hello' : 'hello'}
				style={collection[0].style ? 'hello' : 'hello'}
			/>
			<CollectionProducts items={[{id: 1, view: 'h', size: '2', type: 'hello'}, {id: 2, view: 'h', size: '2', type: 'hello'}]} />
		</div>
	)
}

export default Collection
