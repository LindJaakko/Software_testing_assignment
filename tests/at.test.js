import at from '../src/at'

describe('Tests for at function', () => {
    const object = { a: [{ b: { c: 3 } }, 4], d: [1, { e: { f: 1, g: 2 } }, 3] }
    test('At should return [3, 4]', () => {
        const paths = ['a[0].b.c', 'a[1]']
        expect(at(object, paths)).toStrictEqual([3, 4])
    })

    test('At should return undefined for empty object', () => {
        const paths = ['h']
        expect(at(object, paths)).toStrictEqual([undefined])
    })

    test('At should return [1, 3]', () => {
        const paths = ['d[1].e.f', 'd[2]']
        expect(at(object, paths)).toStrictEqual([1, 3])
    })
})
