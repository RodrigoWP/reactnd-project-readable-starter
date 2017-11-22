'use strict'

export const updateObjectInArrayById = (array = [], object = {}) => {
  return array.map((item, index) => {
    if (item.id !== object.id) {
      return item
    }

    return {
      ...item,
      ...object
    }
  })
}

export const removeObjectInArrayById = (array = [], id = 0) => array.filter(item => item.id !== id)

export const orderDescArray = (array = [], fieldOrder) => {
  if (fieldOrder) {
    const arrayOrdered = array.sort((a, b) => {
      const fieldOne = a[fieldOrder]
      const fieldTwo = b[fieldOrder]

      return fieldOne < fieldTwo ? 1 : fieldOne > fieldTwo ? -1 : 0
    })

    return arrayOrdered
  }

  return array
}
