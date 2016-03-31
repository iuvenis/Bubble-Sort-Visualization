
var fs = require('fs');
var vm = require('vm');
var chai = require('chai');
var BubbleSort = require('../public/js/app');
var expect = chai.expect;
var should = chai.should();

// var functionsFile = fs.readFileSync(process.cwd() + '/public/js/app.js');
// vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL

console.log(BubbleSort().sorter());
describe('BubbleSort', function() {
  it('Should be a function', function() {
    expect(BubbleSort().sorter).to.be.a('function');
  });
  it('Should have an array called bubbleArray', function() {
    expect(BubbleSort().bubbleArray).to.be.an('Array');
  });
  it('Should sort numbers from smallest to largest', function() {
    expect(BubbleSort().sorter()).to.deep.equal([1, 1.2, 2, 3, 5, 6, 80, 90, 100, 100000, 90000000000]);
  });
});