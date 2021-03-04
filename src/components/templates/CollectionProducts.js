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
							{...item}
							key={item.id}
						/>
					)) : <div className='no-products'>Нет товаров</div>
				}
			</div>
		</div>
	)
}

export default CollectionProducts
