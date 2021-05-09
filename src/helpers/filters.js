export const getAllFilter = (items) => {
  let count = {}
  let filters = {
    sizes: {},
    usage: {},
    surface: {}
  }
  const sizes = items.map(item => `${item.width}x${item.length}`)
  sizes.forEach((a) => {
    count[a] = (count[a] || 0) + 1;
  })
  items.forEach((a) => {
    filters.usage[a.usage] = (filters[a.usage] || 0) + 1;
    filters.surface[a.surface] = (filters[a.surface] || 0) + 1;
  })
  const keys = Object.keys(count)
  const values = Object.values(count)
  const filterUsageKeys = Object.keys(filters.usage)
  const filterSurfaceKeys = Object.keys(filters.surface)
  const filterUsageValue = Object.values(filters.usage)
  const filterSurfaceValue = Object.values(filters.surface)

  let final = {
    sizes: [],
    usage: [],
    surface: []
  }

  for(let i = 0; i < keys.length; i++){
    final.sizes[i] = {size: keys[i], count: values[i]}
  }
  for(let i = 0; i < filterUsageKeys.length; i++){
    final.usage[i] = {usage: filterUsageKeys[i], count: filterUsageValue[i]}
  }
  for(let i = 0; i < filterSurfaceKeys.length; i++){
    final.surface[i] = {surface: filterSurfaceKeys[i], count: filterSurfaceValue[i]}
  }

  return final
}

export const getIfMainTovar = (items) => {
  return items.filter(item => item?.main_tovar === true)
}
