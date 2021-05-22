import React from "react";

const FilterItem = (props) => {
  return(
    <div className='checkbox-item'>
      <label>
        <input type="checkbox" value={props.checkValue} className='checkbox-item-checkbox' />
      {props.name} ({props.count})</label>
    </div>
  )
}

export default FilterItem