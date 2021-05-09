import React from "react";

const FilterItem = (props) => {
  return(
    <div className='checkbox-item'>
      <input type="checkbox" value={props.checkValue} />
      <label>{props.name} ({props.count})</label>
    </div>
  )
}

export default FilterItem