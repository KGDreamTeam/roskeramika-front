import React from "react";

const FilterItem = (props) => {
  return(
    <div className='checkbox-item'>
      <label>
        <input type="checkbox" value={props.value} checked={props.checked} onChange={props.change} name={props.formName} className='checkbox-item-checkbox' />
      {props.name} ({props.count})</label>
    </div>
  )
}

export default FilterItem