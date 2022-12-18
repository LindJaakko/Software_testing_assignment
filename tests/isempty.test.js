import isEmpty from '../src/isEmpty'

const emptyArray = []
const typedArr = new Uint8Array(10);
const testSet = new Set([1,2,4])
const emptyMap = {}
const testMap = new Map([{1 : "s"}])
const boolean = true
const number = 2
const testString = "test"
var proto = Object.prototype

function Example(x) {
  this.x = 'x';
}
var obj = new Example("d");

function args() {
  return Object.prototype.toString.call(arguments);
}



describe('Testing isEmpty.js', () => {
  test('null returns true', () => {
    expect(isEmpty(null)).toBe(true)
  })
  test('empty array returns true', () => {
    expect(isEmpty(emptyArray)).toBe(true)
  })
  test('typed array returns false', () => {
    expect(isEmpty(typedArr)).toBe(false)
  })
  test('arguments returns false', () => {
    expect(isEmpty(args(2,3))).toBe(false)
  })
  
  test('boolean value returns true', () => {
    expect(isEmpty(boolean)).toBe(true)
  })
  test('integer returns true', () => {
    expect(isEmpty(number)).toBe(true)
  })
  test('empty map returns true', () => {
    expect(isEmpty(emptyMap)).toBe(true)
  })
  test('string returns false', () => {
    expect(isEmpty(testString)).toBe(false)
  })
  test('map returns false', () => {
    expect(isEmpty(testMap)).toBe(false)
  })
  test('array returns false', () => {
    expect(isEmpty(testSet)).toBe(false)
  })
  test('object returns false', () => {
    expect(isEmpty(obj)).toBe(false)
  })
  test('prototype returns true', () => {
    expect(isEmpty(proto)).toBe(true)
  })
})