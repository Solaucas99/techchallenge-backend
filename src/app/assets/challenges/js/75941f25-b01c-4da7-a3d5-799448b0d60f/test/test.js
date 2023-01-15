const chai = require('chai');
const { fnTeste } = require('../solution/solution.js');

describe('ajskajsa', () => {
  it('test', () => {
    chai.expect(fnTeste([3, 'hi', undefined, () => 'teste'])).to.eql([3]);
  })
})