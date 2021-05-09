import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllFiltersActionCreator} from "../store/actions/filters";

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
              <img src={arrowDown} alt="more" className='filter-more'/>
            </div>
            <div className={showSizes ? 'dropdown-options-filter show' : 'dropdown-options-filter'}>
              {
                sizeFilter && sizeFilter.map(item => (
                  <FilterItem key={item.size} name={item.size} checkValue={item.size} count={item.count} />
                ))
              }
            </div>
          </div>
          <div className='filter-item'>
            <div className='filter-text' onClick={handleShowUsage}>
              <p>Назначение</p>
              <img src={arrowDown} alt="more" className='filter-more'/>
            </div>
            <div className={showUsage ? 'dropdown-options-filter show' : 'dropdown-options-filter'}>
              {
                usageFilter ? usageFilter.map(item => (
                  <FilterItem key={item.usage} name={item.usage} checkValue={item.usage} count={item.count} />
                )) : (
                  <div>no</div>
                )
              }
            </div>
          </div>
          <div className='filter-item'>
            <div className='filter-text' onClick={handleShowSurface}>
              <p>Поверхность</p>
              <img src={arrowDown} alt="more" className='filter-more'/>
            </div>
            <div className={showSurface ? 'dropdown-options-filter show' : 'dropdown-options-filter'}>
              {
                surfaceFilter ? surfaceFilter.map(item => (
                  <FilterItem key={item.surface} name={item.surface} checkValue={item.surface} count={item.count} />
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
            Сбросить Фильтр
          </div>
        </div>

      </div>
    </div>
  )
}

export default Filter