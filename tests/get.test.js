import get from '../src/get'

const object = { 'a': [{ 'b': { 'c': 3 } }] }
const objectErrValue = { 'a': [{ 'b': { 'c': undefined } }] }
const emptyObject = {}
const undefinedObject = null

describe('Testing get.js', () => {
  test('get value from path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3)
  })

  test('return defaultValue when path is undefined', () => {
    expect(get(object, 'a[0].b.d', 0)).toBe(0)
  })

  test('return defaultValue when value is undefined', () => {
    expect(get(objectErrValue, 'a[0].b.c', 0)).toBe(0)
  })

  test('return defaultValue when object is empty', () => {
    expect(get(emptyObject, 'a[0].b.d', 0)).toBe(0)
  })

  test('return defaultValue when object is null', () => {
    expect(get(undefinedObject, 'a[0].b.d', 0)).toBe(0)
  })

})