import React, {useState} from 'react'
import {slide as Menu} from 'react-burger-menu'
import {useSelector} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'

import Search from '../../containers/Search'
import logoMain from '../../assets/img/logo.svg'
import logoSec from '../../assets/img/logo-2.svg'
import upArr from '../../assets/img/upArr.svg'

const HeaderSmall = (props) => {

	const {subCategories, categories} = useSelector(state => ({
		subCategories: state.kategori.subCategories,
		categories: state.kategori.categories
	}))

	const [items, setItems] = useState('')
	const [input, setInput] = useState('')
	const [dropdowns, setDropdowns] = useState([])

	const handleOpenBurger = () => {
		props.setOpen(true)
	}

	const handleCloseBurger = () => {
		props.setOpen(false)
	}
	const handleArrClick = (id) => {
		for(let i = 0; i < dropdowns.length; i++){
			if(dropdowns[i].id === id){
			}
		}
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
						<img src={logoMain} className='logo-main' />
						<img src={logoSec} className='logo-sec' />
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
							dropdowns.push({id: item.id, show: false})
							return(
								<div className='to-small' key={item.id}>
									<Link to={`/category/${item.id}`} className='to-navlink-small'>{item.name}</Link>
									<img src={upArr} alt='arr-small' className='arr' />
									<div className='sub-to-small'>
										{
											subCategories && subCategories.map(sub => {
												if(sub.category === item.id){
													return(
														<Link to={`/sub/${sub.id}`} key={sub.id} className='sub-item-small'>
															{sub.name}
														</Link>
													)
												}
											})
										}
									</div>
								</div>
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
