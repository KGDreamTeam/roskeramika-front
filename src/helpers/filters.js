export const getAllSizes = (items) => {
  let count = {}
  const sizes = items.map(item => `${item.width}x${item.length}`)
  sizes.forEach((a) => {
    count[a] = (count[a] || 0) + 1;
  })
  return count
}

export const getAllUsage = (items) => {
  let count = {}
  items.forEach((a) => {
    count[a.usage] = (count[a.usage] || 0) + 1;
  })
  return count
}

export const getAllSurface = (items) => {
  let count = {}
  items.forEach((a) => {
    count[a.surface] = (count[a.surface] || 0) + 1;
  })
  return count
}
