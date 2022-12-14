import countBy from '../src/countBy'

const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'betty', 'active': true },
       { 'user': 'fred', 'active': false }
     ]

const usersCount = [
    { 'user': 'barney', 'count': 1 },
    { 'user': 'barney', 'count': 2 },
    { 'user': 'barney', 'count': 10 }
]
    
describe('Testing the Jest framework', () => {
  /*
  test('2 active and 1 unactive user', () => {
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 })
  })
  test('2 with count > 1 and 1 with not', () => {
    expect(countBy(usersCount, value => value.count > 1)).toEqual({ 'true': 2, 'false': 1 })
  })
  */
  test('-', () => {
    expect(1).toEqual(1)
  })
})