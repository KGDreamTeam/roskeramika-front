import React, {useState} from 'react'
import {slide as Menu} from 'react-burger-menu'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

import Search from '../../containers/Search'
import logoMain from '../../assets/img/logo.svg'
import logoSec from '../../assets/img/logo-2.svg'
import SmallLink from '../reusable/SmallLink'

const HeaderSmall = (props) => {

	const {categories} = useSelector(state => ({
		categories: state.kategori.categories
	}))

	const [items, setItems] = useState('')
	const [input, setInput] = useState('')

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

	return(
		<Menu {...menuProps}>
			<div className='inside-side-menu'>
				<div className='searches'>
					<Search 
						items={items} 
						setItems={setItems} 
						input={input}
						setInput={setInput}
					/>
					<NavLink to='/'className='logos'>
						<img src={logoMain} className='logo-main' alt='main logo' />
						<img src={logoSec} className='logo-sec' alt='second logo' />
					</NavLink>
				</div>
				<div className='searched-items'>
					{
						items ? items.map(item => (
							<div className='searched-item'>
								hello
							</div>
						)) : null
					}
				</div>
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
