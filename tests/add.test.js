import add from '../src/add'

describe('Tests for add function', () => {
    test('Adding integers', () => {
        expect(add(1, 2)).toBe(3)
    })

    test('Adding floating point numbers', () => {
        expect(add(1.11, 2.22)).toBe(3.33)
    })
})
