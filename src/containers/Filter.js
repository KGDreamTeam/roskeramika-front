import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {checkOneCheckbox, getAllFiltersActionCreator} from "../store/actions/filters";

import arrowDown from '../assets/img/arrow-down.svg'
import FilterItem from "../components/reusable/FilterItem";

const Filter = (props) => {

  const [showSizes, setShowSizes] = useState(false)
  const [showUsage, setShowUsage] = useState(false)
  const [showSurface, setShowSurface] = useState(false)

  const {sizeFilter, usageFilter, surfaceFilter} = useSelector(state => ({
    allProducts: state.collections.allProducts,
    sizeFilter: state.filters.size,
    usageFilter: state.filters.usage,
    surfaceFilter: state.filters.surface
  }))

  const dispatch = useDispatch()

  const handleShowSizes = () => {
    setShowSizes(prev => !prev)
  }

  const handleShowUsage = () => {
    setShowUsage(prev => !prev)
  }

  const handleShowSurface = () => {
    setShowSurface(prev => !prev)
  }

  const handleResetFilter = () => {
    // setShowFiltered(false)
  }

  const handleCheckboxChecked = (e) => {
    dispatch(checkOneCheckbox({name: e.target.name, value: e.target.value}))
    console.log(e.target.name)
  }

  useEffect(() => {
    dispatch(getAllFiltersActionCreator(props.index))
  }, [])

  return(
    <div className='filter'>
      <div className='filter-title'>Фильтр</div>
      <div className="wrapper">
        <div className='filters'>
          <div className='filter-item'>
            <div className='filter-text' onClick={handleShowSizes}>
              <p>Размер</p>
              <img src={arrowDown} alt="more" className={ showSizes ? 'filter-more act' : 'filter-more'}/>
            </div>
            <div className={showSizes ? 'dropdown-options-filter show' : 'dropdown-options-filter'}>
              {
                sizeFilter && sizeFilter.map((item, index) => (
                  <FilterItem 
                    key={index} 
                    change={handleCheckboxChecked} 
                    checked={item.checked} 
                    formName="size" 
                    name={item.size} 
                    value={index} 
                    count={item.count} 
                  />
                ))
              }
            </div>
          </div>
          <div className='filter-item'>
            <div className='filter-text' onClick={handleShowUsage}>
              <p>Назначение</p>
              <img src={arrowDown} alt="more" className={ showUsage ? 'filter-more act': 'filter-more'}/>
            </div>
            <div className={showUsage ? 'dropdown-options-filter show' : 'dropdown-options-filter'}>
              {
                usageFilter ? usageFilter.map((item, index) => (
                  <FilterItem 
                    key={index} 
                    change={handleCheckboxChecked} 
                    checked={item.checked} 
                    formName="usage" 
                    name={item.usage} 
                    value={index} 
                    count={item.count} 
                  />
                )) : (
                  <div>no</div>
                )
              }
            </div>
          </div>
          <div className='filter-item'>
            <div className='filter-text' onClick={handleShowSurface}>
              <p>Поверхность</p>
              <img src={arrowDown} alt="more" className={ showSurface ? 'filter-more act': 'filter-more'}/>
            </div>
            <div className={showSurface ? 'dropdown-options-filter show' : 'dropdown-options-filter'}>
              {
                surfaceFilter ? surfaceFilter.map((item, index) => (
                  <FilterItem 
                    key={index} 
                    change={handleCheckboxChecked} 
                    checked={item.checked} 
                    formName="surface" 
                    name={item.surface} 
                    value={index} 
                    count={item.count} 
                  />
                )) : (
                  <div>no</div>
                )
              }
            </div>
          </div>
          <div className='filter-item'>
            Каталог
          </div>
          <div className='filter-item'>
            <div className="reset-filter" onClick={handleResetFilter}>
              Сбросить Фильтр
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Filter