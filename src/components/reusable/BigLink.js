import React from 'react'
import {useSelector} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'

import upArr from '../../assets/img/upArr.svg'

const BigLink = props => {

	const subCategories = useSelector(state => state.kategori.subCategories)

  return (
    <div className="item" >
			<NavLink to={`/category/${props.id}`} className='link-wrapper'>
				<div className="to-navlink">
					{props.name}
				</div>
				<img 
					src={upArr} 
					alt="arr-small" 
					className={'arr'} 
				/>
			</NavLink>
      <div className={'sub-items'}>
				{
					subCategories && subCategories.map(sub => {
            if (sub.category === props.id) {
              return (
                <Link
                  to={`/sub/${sub.id}`}
                  key={sub.id}
									className="sub-item"
								>
                  {sub.name}
                </Link>
              )
            }
					})
				}
      </div>
    </div>
  )
}

export default BigLink
