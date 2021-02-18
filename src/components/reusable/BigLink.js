import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import upArr from '../../assets/img/upArr.svg'

const BigLink = props => {

	const subCategories = useSelector(state => state.kategori.subCategories)

  return (
    <div className="item" >
			<div className='link-wrapper'>
				<Link to={`/category/${props.id}`} className="to-navlink">
					{props.name}
				</Link>
				<img 
					src={upArr} 
					alt="arr-small" 
					className={'arr'} 
				/>
			</div>
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
