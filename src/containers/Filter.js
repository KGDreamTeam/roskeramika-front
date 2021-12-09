import React, {useEffect, useRef, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  checkOneCheckbox,
  getAllFiltersActionCreator,
  resetFilter,
  setFiltered,
} from "../store/actions/filters"
import { filterCollections, isFiltersChecked } from "../helpers/filters"

import {ArrowDownIcon} from "../assets/img/arrow-down"
import FilterItem from "../components/reusable/FilterItem"
import { setFilteredProducts } from "../store/actions/products"

const Filter = () => {
  const [showSizes, setShowSizes] = useState(false)
  const [showUsage, setShowUsage] = useState(false)
  const [showSurface, setShowSurface] = useState(false)
  const [showCatalog, setShowCatalog] = useState(false)
  const sizesRef = useRef(null)
  const usageRef = useRef(null)
  const surfaceRef = useRef(null)
  const catalogRef = useRef(null)

  const { sizeFilter, usageFilter, surfaceFilter, catalog, filters, products } =
    useSelector((state) => ({
      sizeFilter: state.filters.size,
      usageFilter: state.filters.usage,
      surfaceFilter: state.filters.surface,
      catalog: state.filters.catalog,
      filters: state.filters,
      products: state.products.products,
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
    dispatch(resetFilter())
    setShowCatalog(false)
    setShowSurface(false)
    setShowSizes(false)
    setShowUsage(false)
  }

  const handleCheckboxChecked = (e) => {
    dispatch(checkOneCheckbox({ name: e.target.name, value: e.target.value }))
  }

  useEffect(() => {
    dispatch(getAllFiltersActionCreator())
  }, [])

  const documentEvent = (e) => {
    if (sizesRef.current && !sizesRef.current.contains(e.target)) {
      setShowSizes(false)
    }
    if (surfaceRef.current && !surfaceRef.current.contains(e.target)) {
      setShowSurface(false)
    }
    if (catalogRef.current && !catalogRef.current.contains(e.target)) {
      setShowCatalog(false)
    }
    if (usageRef.current && !usageRef.current.contains(e.target)) {
      setShowUsage(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', documentEvent)
    return () => {
      document.removeEventListener('click', documentEvent)
    }
  }, [sizeFilter, usageFilter, surfaceFilter, catalog])

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
      const filteredProducts = filterCollections(products, filters)
      dispatch(setFilteredProducts(filteredProducts))
    } else {
      dispatch(setFiltered(false))
    }

    if(showSizes){
      setShowSizes(false)
    }
    if(showCatalog){
      setShowCatalog(false)
    }
    if(showSurface){
      setShowSurface(false)
    }
    if(showUsage){
      setShowUsage(false)
    }
  }, [sizeFilter, usageFilter, surfaceFilter, catalog])

  return (
    <div className='filter'>
      <div className='filter-title'>Фильтр</div>
      <div className='wrapper'>
        <div className='filters'>
          <div ref={sizesRef} className='filter-item'>
            <div className='filter-text' onClick={handleShowSizes}>
              <p>Размер</p>
              <ArrowDownIcon
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
                    onClickClose={handleShowSizes}
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
          <div ref={usageRef} className='filter-item'>
            <div className='filter-text' onClick={handleShowUsage}>
              <p>Назначение</p>
              <ArrowDownIcon
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
                    onClickClose={handleShowUsage}
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
          <div ref={surfaceRef} className='filter-item'>
            <div className='filter-text' onClick={handleShowSurface}>
              <p>Поверхность</p>
              <ArrowDownIcon
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
                    onClickClose={handleShowSurface}
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
          <div ref={catalogRef} className='filter-item'>
            <div className='filter-text' onClick={handleShowCatalog}>
              <p>Каталог</p>
              <ArrowDownIcon
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
                    onClickClose={handleShowCatalog}
                    change={handleCheckboxChecked}
                    checked={item.checked}
                    formName='catalog'
                    name={item.name}
                    value={index}
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
