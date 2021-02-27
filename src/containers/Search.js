import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'

import clearInput from '../assets/img/clear-input.svg'
import searchIcon from '../assets/img/search-icon.svg'

const Search = () => {

	const [input, setInput] = useState('')
	const [items, setItems] = useState('')
	const [show, setShow] = useState(false)

	const handleChangeInput = (e) => {
		setInput(e.target.value)
	}

	const handleClearInput = () => {
		setInput('')
	}

	const handleClickSearch = () => {
		setShow(true)
		axios.get(`/apiv1/collection/?search=${input}`)
			.then(res => {
				console.log(res.data)
				setItems([...res.data])
			})
			.catch(err => {
				console.log(err)
			})
	}

	useEffect(() => {
		if(!input){
			setShow(false)
		}
	}, [input])

	return(
		<div className='search'>
			<div className='search-div'>
				<img src={searchIcon} className='search-icon' alt='search' />
				<input 
					type='text' 
					className='search-input' 
					placeholder='Я ищу...'
					value={input}
					onChange={e => handleChangeInput(e)}
				/>
				{
					input.length !== 0 ? (
						<img 
							src={clearInput} 
							className='clear-input' 
							alt='clear input' 
							onClick={handleClearInput}
						/>
					) : null
				}
			</div>
			<button className='btn-search' onClick={handleClickSearch}>Найти</button>
			{
				show ? (
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
