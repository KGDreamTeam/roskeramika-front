import React from "react"

const FilterItem = (props) => {
  return (
    <div className={props.class ? "checkbox-item catalog" : "checkbox-item"}>
      <label>
        <input
          type='checkbox'
          value={props.value}
          checked={props.checked}
          onChange={props.change}
          name={props.formName}
          className='checkbox-item-checkbox'
        />
        {props.name} {props.count && <span> ({props.count})</span>}
      </label>
    </div>
  )
}

export default FilterItem
