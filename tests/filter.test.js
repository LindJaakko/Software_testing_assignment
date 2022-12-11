import filter from '../src/filter'
import add from '../src/add'

describe('Testing the Jest framework', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('adds 2 + 2 to equal 4', () => {
    expect(add(2, 2)).toBe(4)
  })
})