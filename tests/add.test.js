import add from '../src/add'

describe('Testing add.js', () => {

  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('addition of zeros to equal 0', () => {
    expect(add(0, 0)).toBe(0)
  })

  test('addition of positive and negative numbers', () => {
    expect(add(1, -2)).toBe(-1)
  })

  test('addition of negative and positive numbers', () => {
    expect(add(-1, 2)).toBe(1)
  })

  test('addition of positive number and a float', () => {
    expect(add(1, 2.4)).toBe(3.4)
  })
})
