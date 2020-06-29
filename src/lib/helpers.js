function convertArrayToObject(array, key) {
  let initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    }
  }, initialValue)
}

export { convertArrayToObject }
