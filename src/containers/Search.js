import React, {useState} from 'react'

const Search = () => {

	const [input, setInput] = useState('')

	return(
		<div className='search'>
			<input 
				type='text' 
				className='search-input' 
				placeholder='Я ищу...'
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
			<button className='btn-search'>Найти</button>
		</div>
	)
}

export default Search
