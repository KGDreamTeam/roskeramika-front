export const getAllFilter = (items) => {
  let count = {}
  let usage = {}
  let surface = {}
  const sizes = items.map((item) => `${item.width}x${item.length}`)
  sizes.forEach((a) => {
    count[a] = (count[a] || 0) + 1
  })
  const usages = items.map((item) => `${item.usage}`)
  usages.forEach((a) => {
    usage[a] = (usage[a] || 0) + 1
  })
  const surfaces = items.map((item) => `${item.surface}`)
  surfaces.forEach((a) => {
    surface[a] = (surface[a] || 0) + 1
  })
  const keys = Object.keys(count)
  const values = Object.values(count)
  const filterUsageKeys = Object.keys(usage)
  const filterSurfaceKeys = Object.keys(surface)
  const filterUsageValue = Object.values(usage)
  const filterSurfaceValue = Object.values(surface)

  let final = {
    sizes: [],
    usage: [],
    surface: [],
  }

  for (let i = 0; i < keys.length; i++) {
    final.sizes[i] = { name: keys[i], count: values[i], checked: false }
  }
  for (let i = 0; i < filterUsageKeys.length; i++) {
    final.usage[i] = {
      name: filterUsageKeys[i],
      count: filterUsageValue[i],
      checked: false,
    }
  }
  for (let i = 0; i < filterSurfaceKeys.length; i++) {
    final.surface[i] = {
      name: filterSurfaceKeys[i],
      count: filterSurfaceValue[i],
      checked: false,
    }
  }

  return final
}

export const getIfMainTovar = (items) => {
  return items.filter((item) => item?.main_tovar === true)
}

export const isFiltersChecked = (filters) => {
  const filteredItems = filters.filter((item) => item.checked)
  if (filteredItems.length > 0) {
    return true
  } else {
    return false
  }
}

const getWidth = (item) => {
  return `${item.width}x${item.length}`
}

export const filterCollections = (products, filters) => {
  let newFilters = filters.size.concat(filters.usage)
  newFilters = newFilters.concat(filters.surface)
  newFilters = newFilters.concat(filters.catalog)
  // console.log(filters)

  let checkedFilters = newFilters.filter((item) => item.checked)

  let filteredItems = []

  console.log(checkedFilters, "filters")

  filteredItems = []

  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < checkedFilters.length; j++) {
      if (
        products[i].surface === checkedFilters[j].name ||
        getWidth(products[i]) === checkedFilters[j].name ||
        products[i].usage === checkedFilters[j].name ||
        products[i].subcategorie === checkedFilters[j].name
      ) {
        filteredItems.push(products[i])
      }
    }
  }

  console.log(filteredItems)
}
