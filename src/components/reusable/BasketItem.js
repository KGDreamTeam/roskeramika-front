import React, {useState} from 'react'

const BasketItem = (props) => {

	const [count, setCount] = useState(0)

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
          <div className="count-wrapper">
            <div className="count-text">Количество</div>
            <div className="count-logic">
              <button>-</button>
							<input 
								value={count} 
								onChange={e => setCount(e.target.value)}
								type='number' 
							/>
              <button>+</button>
            </div>
            <span>
              m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketItem
