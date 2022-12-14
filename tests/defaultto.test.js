import defaultTo from '../src/defaultTo'

describe('Testing defaultTo.js', () => {
  test('return valid value', () => {
    expect(defaultTo(1, 10)).toBe(1)
  })

  test('return defaultValue with null given', () => {
    expect(defaultTo(null, 10)).toBe(10)
  })

  test('return defaultValue with undefined given', () => {
    expect(defaultTo(undefined, 10)).toBe(10)
  })
  /*
  test('return defaultValue with NaN given', () => {
    expect(defaultTo(NaN, 10)).toBe(10)
  })
  */
})