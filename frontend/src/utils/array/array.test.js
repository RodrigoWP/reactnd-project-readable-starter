import { updateObjectInArrayById, removeObjectInArrayById } from '.'
import { expect } from 'chai'

it('should be updateObjectInArrayById([{id: 1, name: "obj1"}, {id: 2, name: "obj2"}], {id: 1, name: "obj3"}) return [{id: 1, name: "obj1"}, {id: 1, name: "obj3"}]',
  () => {
    const array = [{ id: 1, name: 'obj2' }, { id: 2, name: 'obj2' }]
    const objectUpdate = { id: 2, name: 'obj3' }
    const result = [{ id: 1, name: 'obj2' }, { id: 2, name: 'obj3' }]

    expect(updateObjectInArrayById(array, objectUpdate)).to.be.deep.equal(result)
  })

it('should be removeObjectInArrayById([{id: 1, name: "obj1"}, {id: 2, name: "obj2"}], 2) return [{id: 1, name: "obj1"}]',
  () => {
    const array = [{ id: 1, name: 'obj2' }, { id: 2, name: 'obj2' }]
    const removeId = 2
    const result = [{ id: 1, name: 'obj2' }]

    expect(removeObjectInArrayById(array, removeId)).to.be.deep.equal(result)
  })
