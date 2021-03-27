import React, {useState, useEffect} from 'react'
import axios from '../../axios/axios'

import Collection from "../templates/Collection";

const Category = (props) => {
	const [collections, setCollections] = useState([])

	useEffect(() => {
		const i = props.match.params.id
		axios.get(`/apiv1/collection/?categories=${i}`)
			.then(res => {
			  const data = res.data
				setCollections([...data])
			})
			.catch(err => {
				console.log(err)
			})
	}, [props.match.params.id])

	return(
		<div className='category-page'>
      <div className='category-page-container'>
				{
					collections && collections.map(item => (
						<Collection
							img={item.image1}
							name={item.name}
							key={item.id}
							id={item.id}
							sales={item.discount}
							products={item.products}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Category
