const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('Should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('Should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('Should return an error if "fullName" arg is lower or higher than 2 words', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Jefferson Doe')).to.equal('Error');
  });

  it('Should return good format "fullName" if proper arg', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOhn dOE')).to.equal('John Doe');
  });

});