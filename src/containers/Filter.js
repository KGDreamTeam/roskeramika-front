import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllFiltersActionCreator} from "../store/actions/filters";

import arrowDown from '../assets/img/arrow-down.svg'

const Filter = (props) => {

  const {allProducts, subCat} = useSelector(state => ({
    allProducts: state.collections.allProducts,
    subCat: state.kategori.subCategories,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllFiltersActionCreator(props.index))
  }, [allProducts])

  return(
    <div className='filter'>
      <div className='filter-title'>Фильтр</div>
      <div className="wrapper">
        <div className='filters'>
          <div className='filter-item'>
            <div className='filter-text'>
              <p>Размер</p>
              <img src={arrowDown} alt="more" className='filter-more'/>
            </div>
            <div className='dropdown-options-filter'>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>
          <div className='filter-item'>
            Назначение
          </div>
          <div className='filter-item'>
            Поверхность
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