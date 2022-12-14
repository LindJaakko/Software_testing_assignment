import isEmpty from '../src/isEmpty'

const emptyArray = []
const testArray = [1,2,4]
const emptyMap = {}
const testMap = {1 : "s"}
const boolean = true
const number = 2
const testString = "test"

describe('Testing isEmpty.js', () => {
  test('null returns true', () => {
    expect(isEmpty(null)).toBe(true)
  })
  test('empty array returns true', () => {
    expect(isEmpty(emptyArray)).toBe(true)
  })
  test('boolean value returns true', () => {
    expect(isEmpty(boolean)).toBe(true)
  })
  test('integer returns true', () => {
    expect(isEmpty(number)).toBe(true)
  })
  test('empty map returns true', () => {
    expect(isEmpty(emptyMap)).toBe(true)
  })
  test('string returns false', () => {
    expect(isEmpty(testString)).toBe(false)
  })
  test('map returns false', () => {
    expect(isEmpty(testMap)).toBe(false)
  })
  test('array returns false', () => {
    expect(isEmpty(testArray)).toBe(false)
  })
})