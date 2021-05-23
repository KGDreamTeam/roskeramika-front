import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  checkOneCheckbox,
  getAllFiltersActionCreator,
  setFiltered,
} from "../store/actions/filters"
import { filterCollections, isFiltersChecked } from "../helpers/filters"

import arrowDown from "../assets/img/arrow-down.svg"
import FilterItem from "../components/reusable/FilterItem"

const Filter = (props) => {
  const [showSizes, setShowSizes] = useState(false)
  const [showUsage, setShowUsage] = useState(false)
  const [showSurface, setShowSurface] = useState(false)
  const [showCatalog, setShowCatalog] = useState(false)

  const { sizeFilter, usageFilter, surfaceFilter, catalog, filters, products } =
    useSelector((state) => ({
      sizeFilter: state.filters.size,
      usageFilter: state.filters.usage,
      surfaceFilter: state.filters.surface,
      catalog: state.filters.catalog,
      filters: state.filters,
      products: state.products,
    }))

  const dispatch = useDispatch()

  const handleShowSizes = () => {
    setShowSizes((prev) => !prev)
  }

  const handleShowUsage = () => {
    setShowUsage((prev) => !prev)
  }

  const handleShowSurface = () => {
    setShowSurface((prev) => !prev)
  }

  const handleShowCatalog = () => {
    setShowCatalog((prev) => !prev)
  }

  const handleResetFilter = () => {
    // setShowFiltered(false)
  }

  const handleCheckboxChecked = (e) => {
    dispatch(checkOneCheckbox({ name: e.target.name, value: e.target.value }))
  }

  useEffect(() => {
    dispatch(getAllFiltersActionCreator())
  }, [])

  useEffect(() => {
    const isSizeChecked = isFiltersChecked(sizeFilter)
    const isUsageChecked = isFiltersChecked(usageFilter)
    const isSurfaceChecked = isFiltersChecked(surfaceFilter)
    const isCatalogChecked = isFiltersChecked(catalog)

    if (
      isSizeChecked ||
      isUsageChecked ||
      isSurfaceChecked ||
      isCatalogChecked
    ) {
      dispatch(setFiltered(true))
      // dispatch(filterProductsToShow())
      filterCollections(products, filters)
    } else {
      dispatch(setFiltered(false))
    }
  }, [sizeFilter, usageFilter, surfaceFilter, catalog])

  return (
    <div className='filter'>
      <div className='filter-title'>Фильтр</div>
      <div className='wrapper'>
        <div className='filters'>
          <div className='filter-item'>
            <div className='filter-text' onClick={handleShowSizes}>
              <p>Размер</p>
              <img
                src={arrowDown}
                alt='more'
                className={showSizes ? "filter-more act" : "filter-more"}
              />
            </div>
            <div
              className={
                showSizes
                  ? "dropdown-options-filter show"
                  : "dropdown-options-filter"
              }>
              {sizeFilter &&
                sizeFilter.map((item, index) => (
                  <FilterItem
                    key={index}
                    change={handleCheckboxChecked}
                    checked={item.checked}
                    formName='size'
                    name={item.name}
                    value={index}
                    count={item.count}
                  />
                ))}
            </div>
          </div>
          <div className='filter-item'>
            <div className='filter-text' onClick={handleShowUsage}>
              <p>Назначение</p>
              <img
                src={arrowDown}
                alt='more'
                className={showUsage ? "filter-more act" : "filter-more"}
              />
            </div>
            <div
              className={
                showUsage
                  ? "dropdown-options-filter show"
                  : "dropdown-options-filter"
              }>
              {usageFilter ? (
                usageFilter.map((item, index) => (
                  <FilterItem
                    key={index}
                    change={handleCheckboxChecked}
                    checked={item.checked}
                    formName='usage'
                    name={item.name}
                    value={index}
                    count={item.count}
                  />
                ))
              ) : (
                <div>no</div>
              )}
            </div>
          </div>
          <div className='filter-item'>
            <div className='filter-text' onClick={handleShowSurface}>
              <p>Поверхность</p>
              <img
                src={arrowDown}
                alt='more'
                className={showSurface ? "filter-more act" : "filter-more"}
              />
            </div>
            <div
              className={
                showSurface
                  ? "dropdown-options-filter show"
                  : "dropdown-options-filter"
              }>
              {surfaceFilter ? (
                surfaceFilter.map((item, index) => (
                  <FilterItem
                    key={index}
                    change={handleCheckboxChecked}
                    checked={item.checked}
                    formName='surface'
                    name={item.name}
                    value={index}
                    count={item.count}
                  />
                ))
              ) : (
                <div>no</div>
              )}
            </div>
          </div>
          <div className='filter-item'>
            <div className='filter-text' onClick={handleShowCatalog}>
              <p>Каталог</p>
              <img
                src={arrowDown}
                alt='more'
                className={showCatalog ? "filter-more act" : "filter-more"}
              />
            </div>
            <div
              className={
                showCatalog
                  ? "dropdown-options-filter show"
                  : "dropdown-options-filter"
              }>
              {catalog ? (
                catalog.map((item, index) => (
                  <FilterItem
                    key={index}
                    change={handleCheckboxChecked}
                    checked={item.checked}
                    formName='catalog'
                    name={item.name}
                    value={index}
                    class={"catalog"}
                  />
                ))
              ) : (
                <div>no</div>
              )}
            </div>
          </div>
          <div className='filter-item'>
            <div className='reset-filter' onClick={handleResetFilter}>
              Сбросить Фильтр
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
