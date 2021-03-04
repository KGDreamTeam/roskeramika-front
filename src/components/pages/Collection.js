import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import CollectionInfo from '../templates/CollectionInfo'
import CollectionProducts from '../templates/CollectionProducts'
import BannerHeader from '../templates/BannerHeader'

import bannerImg from '../../assets/img/banner-header.svg'
import {handleGetOneCollectionActionCreator} from '../../store/actions/collections'
import {getMinPriceOfArr} from '../../helpers/persentCalc'

const Collection = (props) => {
	const dispatch = useDispatch()
	const collection = useSelector(state => state.collections.oneCollection)
	const [price, setPrice] = useState(0)
	const [size, setSize] = useState('')

	useEffect(() => {
		if(collection?.products === undefined){
			dispatch(handleGetOneCollectionActionCreator(props.match.params.id))
		} else {
			setPrice(getMinPriceOfArr(collection.products))
			let mainProduct = collection.products.filter(item => {
				return item.main_tovar === true
			})
			if(mainProduct.length !== 0){
				let sizeProd = `${mainProduct[0].width}x${mainProduct[0].length}`
				setSize(sizeProd)
			}
		}
	}, [props.match.params.id, collection])

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
						price={price}
						size={size}
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
