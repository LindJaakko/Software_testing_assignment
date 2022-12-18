import countBy from '../src/countBy'

const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'betty', 'active': true },
       { 'user': 'fred', 'active': false }
     ]

const usersOne = [
  { 'user': 'barney', 'active': true }
] 

const usersCount = [
    { 'user': 'barney', 'count': 1 },
    { 'user': 'barney', 'count': 2 },
    { 'user': 'barney', 'count': 10 }
]
const emptyUsers = []
    
describe('Testing countby.js', () => {
  
  test('2 active and 1 unactive user', () => {
    expect(countBy(users, value => value.active)).toEqual({ 'true': 1, 'false': 0 })
  })
  test('2 with count > 1 and 1 with not', () => {
    expect(countBy(usersCount, value => value.count > 1)).toEqual({ 'true': 1, 'false': 0 })
  })
  test('1 active user', () => {
    expect(countBy(usersOne, value => value.active)).toEqual({ 'true': 0 })
  })
  test("emptyObject returns nothing", () => {
    expect(countBy(emptyUsers, value => value.active)).toEqual({ })
  })
  
})