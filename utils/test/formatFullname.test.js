const expect = require('chai').expect;
const formatFullname = require('../formatFullname');

describe('FormatFullName', () => {
  it('should return an error if content arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function(){})).to.equal('Error');
  });
  it('should return an error if fullName arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  it('should return an error if fullName arg format is different then <firstname> <lastname>', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
  it('should return full name in proper format', () => {
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('JOHN doE')).to.equal('John Doe');
  })
});

