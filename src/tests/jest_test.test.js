//const add = require('../add.js')
import add from '../add.js'

describe('Testing the Jest framework', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })
})
