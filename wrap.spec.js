const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns a string', () => {
    expect(wrap("hello", 10)).to.equal("hello");
  });
  it('Wraps once', () => {
    expect(wrap("Hello my name is Eugene", 15)).to.equal("Hello my name\nis Eugene")
  })
  it('Wraps multiple times', () => {
    expect(wrap("Hello my name is Wendy", 5)).to.equal("Hello\nmy\nname\nis\nWendy\n")
  })
});

//lngth is 23
