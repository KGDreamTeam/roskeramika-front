import React , {useState}from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import upArr from '../../assets/img/upArr.svg'

const BigLink = props => {

	const subCategories = useSelector(state => state.kategori.subCategories)
	const [show, setShow] = useState(false)

	const handleClick = () => {
		setShow(!show)
	}

  return (
    <div className="item" >
			<div className='link-wrapper'>
				<Link to={`/category/${props.id}`} className="to-navlink">
					{props.name}
				</Link>
				<div 
					onClick={handleClick} 
					className='arr-wrapper'
				>
					<img 
						src={upArr} 
						alt="arr-small" 
						className={show ? 'arr down' : 'arr'} 
					/>
				</div>
			</div>
      <div className={show ? 'sub-items show': 'sub-items'}>
        {subCategories &&
          subCategories.map(sub => {
            if (sub.category === props.id) {
              return (
                <Link
                  to={`/sub/${sub.id}`}
                  key={sub.id}
                  className="sub-item">
                  {sub.name}
                </Link>
              )
            }
          })}
      </div>
    </div>
  )
}

export default BigLink
