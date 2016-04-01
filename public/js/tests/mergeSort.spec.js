describe('mergeSort', function() {
  it('Should be a function', function() {
    expect('mergeSort').to.be.a('function');
  });
  it('Should take in three parameters', function() {
    expect('mergeSort').to.have('arr');
    expect('mergeSort').to.have('l');
    expect('mergeSort').to.have('r');
  });
  it('Should return an array', function() {
    expect('mergeSort()').to.be.an('array');
  });
});