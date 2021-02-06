import React, {useEffect} from 'react'

const Product = (props) => {
	useEffect(() => {
		console.log(props)
	}, [])

	return(
		<div className='product-page'>
			products
		</div>
	)
}

export default Product
