import slice from '../src/slice'

describe('Tests for slice function', () => {
    const array = [1, 2, 3, 4, 5, 6, 7]

    test('Slice should return [3, 4, 5, 6, 7]', () => {
        expect(slice(array, 2)).toStrictEqual([3, 4, 5, 6, 7])
    })

    test('Slice should return [4]', () => {
        expect(slice(array, 3, 4)).toStrictEqual([4])
    })

    test('Slice should return [4,5,6]', () => {
        expect(slice(array, 3, 6)).toStrictEqual([4, 5, 6])
    })

    test('Slice should return [6,7]', () => {
        expect(slice(array, -2)).toStrictEqual([6, 7])
    })

    test('Slice should return [5,6]', () => {
        expect(slice(array, -3, -1)).toStrictEqual([5, 6])
    })

    test('Slice should return [1, 2, 3, 4, 5, 6, 7]', () => {
        expect(slice(array)).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
    })

    test('Slice should return []', () => {
        expect(slice(array, 0, 0)).toStrictEqual([])
    })

    test('Slice should return []', () => {
        expect(slice([], 0, 0)).toStrictEqual([])
    })
})
