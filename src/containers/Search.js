import React, {useState} from 'react'
import {useSelector} from 'react-redux'

const Search = () => {

	const products = useSelector(state => state.products)

	const [input, setInput] = useState('')
	const [items, setItems] = useState('')

	const handleChangeInput = (e) => {
		setInput(e.target.value)
		let searched = products.filter(item => item.name.includes(input))
		setItems([...searched])
	}

	return(
		<div className='search'>
			<input 
				type='text' 
				className='search-input' 
				placeholder='Я ищу...'
				value={input}
				onChange={e => handleChangeInput(e)}
			/>
			<button className='btn-search'>Найти</button>
			{
				input && items ? (
					<div className='searched-items' >
						{
							items.lenght !== 0 ? items.map(items => (
								<div>{items.hello}</div>
							)) : (<div>Не удалось найти</div>)
						}
					</div>
				) : null
			}
		</div>
	)
}

export default Search
