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
				name={'hello'}
				price={'hello'}
				manufacturer={'hello'}
				size={'hello'}
				surface={'hello'}
				style={'hello'}
			/>
			<CollectionProducts items={[{id: 1, view: 'h', size: '2', type: 'hello'}, {id: 2, view: 'h', size: '2', type: 'hello'}]} />
		</div>
	)
}

export default Collection
