import filter from '../src/filter'

describe('Tests for filter function', () => {
    test('Filter should return object for barney', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
        ]
        expect(filter(users, ({ active }) => active)).toStrictEqual([
            {
                user: 'barney',
                active: true,
            },
        ])
    })

    test('Filter should return object for barney', () => {
        const users = [
            { user: 'barney', age: 50 },
            { user: 'fred', age: 25 },
        ]
        expect(filter(users, ({ age }) => age > 30)).toStrictEqual([
            {
                user: 'barney',
                age: 50,
            },
        ])
    })

    test('Filter should return two objects', () => {
        const users = [
            { user: 'barney', age: 50 },
            { user: 'fred', age: 25 },
        ]
        expect(filter(users, ({ age }) => age > 20)).toStrictEqual([
            {
                user: 'barney',
                age: 50,
            },
            {
                user: 'fred',
                age: 25,
            },
        ])
    })

    test('Filter should return no objects', () => {
        const users = [
            { user: 'barney', age: 50 },
            { user: 'fred', age: 25 },
        ]
        expect(filter(users, ({ age }) => age > 51)).toStrictEqual([[]])
    })

    test('Filter should return empty array for empty input', () => {
        const users = []
        expect(filter(users, ({ age }) => age > 51)).toStrictEqual([[]])
    })
})
