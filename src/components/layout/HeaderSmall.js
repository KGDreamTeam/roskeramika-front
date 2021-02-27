import React, {useState, useEffect} from 'react'
import {slide as Menu} from 'react-burger-menu'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import axios from '../../axios/axios'

import logoMain from '../../assets/img/logo.svg'
import logoSec from '../../assets/img/logo-2.svg'
import SmallLink from '../reusable/SmallLink'
import clearInput from '../../assets/img/clear-input.svg'
import searchIcon from '../../assets/img/search-icon.svg'

const HeaderSmall = (props) => {

	const {categories} = useSelector(state => ({
		categories: state.kategori.categories
	}))

	const [items, setItems] = useState('')
	const [input, setInput] = useState('')
	const [show, setShow] = useState(false)

	const handleChangeInput = (e) => {
		setInput(e.target.value)
	}

	const handleClearInput = () => {
		setInput('')
		setShow(false)
		setItems('')
	}

	const handleClickSearch = () => {
		axios.get(`/apiv1/collection/?search=${input}`)
			.then(res => {
				const data = res.data.sort((a, b) => a.name - b.name)
				setItems([...data])
			})
			.catch(err => {
				console.log(err)
			})
		setShow(true)
	}

	useEffect(() => {
		if(input.length === 0){
			setShow(false)
			setItems('')
		}
	}, [input])

	const handleOpenBurger = () => {
		props.setOpen(true)
	}

	const handleCloseBurger = () => {
		props.setOpen(false)
	}

	const menuProps = {
		disableAutoFocus: true,
		styles: styles,
		customCrossIcon: false,
		customBurgerIcon: false,
		isOpen: props.open,
		onOpen: handleOpenBurger,
		onClose: handleCloseBurger,
		width: '80%',
	}

	const Item = (props) => {
		return(
			<NavLink 
				to={`/collection/${props.id}`} 
				className='nav-small' 
				onClick={() => {
					handleClearInput()
					handleCloseBurger()
				}}
			>
				<div className='item-small'>
					<span className='bold-small'>{props.name}</span> {props.sub}
				</div>
			</NavLink>
		)
	}

	return(
		<Menu {...menuProps}>
			<div className='inside-side-menu'>
				<div className='searches'>
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
					</div>
					<NavLink to='/'className='logos'>
						<img src={logoMain} className='logo-main' alt='main logo' />
						<img src={logoSec} className='logo-sec' alt='second logo' />
					</NavLink>
				</div>
				{
					show ? (
						<div className='searched-items-small'>
							{
								items.length !== 0 ? items.map(item => (
									<Item 
										id={item.id}
										key={item.id}
										name={item.name}
										sub={item.subcategorieis.name}
									/>
								)) : <div className='nothing-small'>Не удалось найти</div>
							}
						</div>
					) : null
				}
				<div className='navigation-small'>
					{
						categories && categories.map(item => {
							return(
								<SmallLink 
									name={item.name}
									id={item.id}
									key={item.id}
								/>
							)
						})
					}
					<NavLink to='/about' className='item-link-small'>О нас</NavLink>
				</div>
			</div>
		</Menu>
	)
}

export default HeaderSmall

var styles = {
  bmBurgerBars: {
    background: '#fff'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'white',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#393939'
  },
}
