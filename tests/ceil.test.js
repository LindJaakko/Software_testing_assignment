import ceil from '../src/ceil'

describe('Tests for ceil function', () => {
    test('Ceil should return 5', () => {
        expect(ceil(4.006)).toBe(5)
    })

    test('Ceil should return 0', () => {
        expect(ceil(0)).toBe(0)
    })

    test('Ceil should return 5100', () => {
        expect(ceil(5050, -2)).toBe(5100)
    })

    test('Ceil should return 6000', () => {
        expect(ceil(5050, -3)).toBe(6000)
    })

    test('Ceil should return -3.2', () => {
        expect(ceil(-3.23, 1)).toBe(-3.2)
    })

    test('Ceil should return 3.3', () => {
        expect(ceil(3.25, 1)).toBe(3.3)
    })

    test('Ceil should return NaN', () => {
        expect(ceil('test')).toBe(NaN)
    })
})
