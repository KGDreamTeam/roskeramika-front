import React, {useState} from 'react'
import {roundCalculationMinus, roundCalculationPlus} from '../../helpers/roundCalculation'
import closeIcon from '../../assets/img/closeIcon.svg'

const BasketItem = (props) => {

	const [count, setCount] = useState(0)
	const [price, setPrice] = useState(0)

	const minusHandler = () => {
		setCount(prev => roundCalculationMinus(prev))
	}

	const plusHandler = () => {
		setCount(prev => roundCalculationPlus(prev))
	}

  return (
    <div className="cart-item">
      <h2>
        {props.subname} {props.name} ({props.artikul})
      </h2>
      <div className="cart-item-infos">
        <div className="image-wrapper">
          <img
            src={props.image}
            className="cart-item-img"
            alt="product of cart"
          />
        </div>
        <div className="infos-wrapper">
          <div className="manufac-wrapper">
            <div className="manufac-text">Производитель:</div>
            <div className="manufac">{props.manufac}</div>
          </div>
          <div className="size-wrapper">
            <div className="size-text">Размер:</div>
            <div className="size">{props.size}</div>
          </div>
          <div className="surface-wrapper">
            <div className="surface-text">Поверхность:</div>
            <div className="surface">{props.surface}</div>
          </div>
					<div className='dots'></div>
          <div className="count-wrapper">
            <div className="count-text">Количество</div>
            <div className="count-logic">
							<button 
								disabled={count <= 0 ? true : false}
								className='minus' 
								onClick={minusHandler}
							>-</button>
							<input 
								value={count} 
								onChange={e => setCount(e.target.value)}
								type='number' 
								className='input-count'
								type='number'
								min={0}
								step={0.01}
							/>
              <button className='minus' onClick={plusHandler}>+</button>
            </div>
            <span>m<sup>2</sup></span>
          </div>
					<div className='dots'></div>
					<div className='item-total-price-wrapper'>
						<div className='price-text'>Цена:</div>
						<div className='price'>
							{price} 
							<span>Сом</span> 
							<button className='delete-item-btn'>
								<img src={closeIcon} alt='delete item' className='close-icon' />
							</button>
						</div>
					</div>
        </div>
      </div>
    </div>
  )
}

export default BasketItem
