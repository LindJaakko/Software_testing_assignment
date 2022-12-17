import words from '../src/words'

describe('Tests for words function', () => {
    test('Words should return array of words in string', () => {
        const string = 'one, two, three'
        expect(words(string)).toStrictEqual(['one', 'two', 'three'])
    })

    test('Words should return array of words in string with &', () => {
        const string = 'one, two, three &'
        expect(words(string, /[^, ]+/g)).toStrictEqual([
            'one',
            'two',
            'three',
            '&',
        ])
    })

    test('Words should return array of words in string without &', () => {
        const string = 'one, two, three &'
        expect(words(string)).toStrictEqual(['one', 'two', 'three'])
    })
})
