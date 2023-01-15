const { JSDOM } = require('jsdom');
const chai = require('chai');
const fs = require('fs');
const path = require('path');

describe('TEST_NAME', () => {
  it('TEST_DESCRIPTION', () => {
    // Virtual window DOM created
    const { window } = new JSDOM(
      fs.readFileSync(path.join(__dirname + '/../html/index.html')),
      { runScripts: 'dangerously' },
    ).window;

    // Virtual Document
    const document = window.document;

    //Creating and appending script
    const script_one = document.createElement('script');

    script_one.innerHTML = fs
      .readFileSync(path.join(__dirname + '/../solution/solution.js'))
      .toString();

    document.head.appendChild(script_one);

    const btn = document.querySelector('#clickme');

    btn.click();

    // Creating an array from DataLayer for tests
    const mappedDL = window.dataLayer.map((argument) =>
      typeof argument[Symbol.iterator] === 'function'
        ? Object.values(argument)
        : argument,
    );

    // Example tests
    chai.expect(
      mappedDL.find((el) => el.find((element) => element === 'conversion')),
    ).to.nested.include.deep.members(['event', 'conversion']);
  });
});
