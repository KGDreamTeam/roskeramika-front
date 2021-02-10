import React from 'react'

import CollectionProduct from './CollectionProduct'
import imageProduct from '../../assets/img/product-item.svg'

const CollectionProducts = (props) => {
	return(
		<div className='collection-products-wrapper'>
			<h2>Товары коллекции {props.collection}</h2>
			<div className='collection-products'>
				{
					props.items.length !== 0 ? props.items.map(item => (
						<CollectionProduct 
							size={item.size} 
							key={item.id} 
							type={item.type}
							view={item.view}
							img={imageProduct}
						/>
					)) : <div className='no-products'>Нет товаров</div>
				}
			</div>
		</div>
	)
}

export default CollectionProducts
