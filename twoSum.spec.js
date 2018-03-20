const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns an array', () => {
    expect(twoSum()).to.deep.equal([]);
  });
  it('Returns two distinct numbers', () => {
    const arr = [1,2,3,4]
    expect(twoSum(arr, 4)).to.deep.equal([1, 3]);
  });
});
