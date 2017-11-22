import { updateObjectInArrayById, removeObjectInArrayById, orderDescArray } from '.'
import { expect } from 'chai'

describe('array', () => {
  describe('updateObjectInArrayById', () => {
    it('([{id: 1, name: "obj1"}, {id: 2, name: "obj2"}], {id: 1, name: "obj3"}) should be return [{id: 1, name: "obj1"}, {id: 1, name: "obj3"}]', () => {
      const array = [{ id: 1, name: 'obj2' }, { id: 2, name: 'obj2' }]
      const objectUpdate = { id: 2, name: 'obj3' }
      const result = [{ id: 1, name: 'obj2' }, { id: 2, name: 'obj3' }]

      expect(updateObjectInArrayById(array, objectUpdate)).to.be.deep.equal(result)
    })
  })

  describe('removeObjectInArrayById', () => {
    it('([{id: 1, name: "obj1"}, {id: 2, name: "obj2"}], 2) should be return [{id: 1, name: "obj1"}]', () => {
      const array = [{ id: 1, name: 'obj2' }, { id: 2, name: 'obj2' }]
      const removeId = 2
      const result = [{ id: 1, name: 'obj2' }]

      expect(removeObjectInArrayById(array, removeId)).to.be.deep.equal(result)
    })
  })

  describe('orderDescArray', () => {
    it('Should be return empty array whitout params', () => {
      expect(orderDescArray()).to.be.deep.equal([])
    })

    it('Should be return the same array whitout fieldOrder defined', () => {
      const array = [{ id: 1, name: 'fulano' }, { id: 2, name: 'ciclano' }]
      const result = [{ id: 1, name: 'fulano' }, { id: 2, name: 'ciclano' }]

      expect(orderDescArray(array)).to.be.deep.equal(result)
    })

    it('Should be return the same array ordered DESC by id when fieldOrder equals id', () => {
      const array = [{ id: 1, name: 'fulano' }, { id: 2, name: 'ciclano' }]
      const fieldOrder = 'id'
      const result = [{ id: 2, name: 'ciclano' }, { id: 1, name: 'fulano' }]

      expect(orderDescArray(array, fieldOrder)).to.be.deep.equal(result)
    })

    it('Should be return the same array ordered DESC by age when fieldOrder equals age', () => {
      const array = [{ id: 1, age: 1 }, { id: 1, age: 2 }]
      const fieldOrder = 'age'
      const result = [{ id: 1, age: 2 }, { id: 1, age: 1 }]

      expect(orderDescArray(array, fieldOrder)).to.be.deep.equal(result)
    })
  })
})
