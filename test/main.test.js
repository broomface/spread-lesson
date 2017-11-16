const chai = require('chai')
const expect = chai.expect
const main = require('../main.js')

describe('rest', function() {
  it('should return the correct array', function() {
    expect(main.rest(1, 2, 3)).to.deep.equal([2, 4, 6])
  })
  it('should account for n number of arguments', function() {
    expect(main.rest(1, 2, 3, 4, 5, 6)).to.deep.equal([2, 4, 6, 8, 10, 12])
  })
  it('should use the rest operator', function() {
    const match = main.rest.toString().includes('...')
    expect(match).to.equal(true)
  })
})

describe('concat', function() {
  it('should concat two arrays', function() {
    expect(main.concat([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6])
  })
  it('should use the spread operator', function() {
    const match = main.concat.toString().includes('...')
    expect(match).to.equal(true)
  })
})

describe('spreadAdd', function() {
  it('should return the correct result', function() {
    expect(main.spreadAdd([1, 2, 3])).to.equal(6)
  })
  it('should use the spread operator', function() {
    const match = main.spreadAdd.toString().includes('...')
    expect(match).to.equal(true)
  })
})

describe('mathSpread', function() {
  it('should return the max number in array', function() {
    expect(main.mathSpread([1, 2, 4, 7, 9])).to.equal(9)
  })
  it('should use the spread operator', function() {
    const match = main.mathSpread.toString().includes('...')
    expect(match).to.equal(true)
  })
})
