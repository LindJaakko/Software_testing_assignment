const sum = require('../test_assets/sum')

describe('Testing the Jest framework', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
