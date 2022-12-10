//const add = require('../src/add.js')
import add from '../src/add'
//import add from '..../add'

describe('Testing the Jest framework', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })
})
