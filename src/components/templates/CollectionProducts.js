import React from 'react'

import CollectionProduct from './CollectionProduct'

const CollectionProducts = (props) => {
	return(
		<div className='collection-products-wrapper'>
			<h2>Товары коллекции {props.collection}</h2>
			<div className='collection-products'>
				{
					props.items.length !== 0 ? props.items.map(item => (
						<CollectionProduct 
							size={`${item.width}x${item.length}`} 
							key={item.id} 
							type={item.surface}
							view={item.usage}
							img={item.image1}
							price={item.price}
						/>
					)) : <div className='no-products'>Нет товаров</div>
				}
			</div>
		</div>
	)
}

export default CollectionProducts
