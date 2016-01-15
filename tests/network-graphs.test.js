var common = require('./common'),
    expect = require('chai').expect;

describe.only('Network Graphs', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
    it('should navigate to Network Graphs', () => {
      return browser.click('//a[contains(text(), "Network Graph")]')
      .then(() => browser.waitForExist('h1.page-header'))
      .then(() => browser.getText('h1.page-header'))
      .then((title) => { expect(title).to.equal('Network Graphs'); });
  });

  [
    //Eth0
    { name: 'Eth0 Past Hour', metric: 'Eth0', duration: '1 Hour', expected: 'Eth0 Past Hour' },
    { name: 'Eth0 Past Hour', metric: 'Eth0', duration: '2 Hours', expected: 'Eth0 Past Hour' },
    { name: 'Eth0 Past Hour', metric: 'Eth0', duration: '6 Hours', expected: 'Eth0 Past Hour' },
    { name: 'Eth0 Past Hour', metric: 'Eth0', duration: '12 Hours', expected: 'Eth0 Past Hour' },
    { name: 'Eth0 Past Hour', metric: 'Eth0', duration: '1 Day', expected: 'Eth0 Past Day' },
    { name: 'Eth0 Past Hour', metric: 'Eth0', duration: '1 Week', expected: 'Eth0 Past Week' },
    { name: 'Eth0 Past Hour', metric: 'Eth0', duration: '1 Month', expected: 'Eth0 Past Month' },
  ].forEach((test) => {
    it('should show ' + test.name, () => {
      return Promise.all([
        browser.selectByVisibleText('//select[@name="metric"]', test.metric),
        browser.selectByVisibleText('//select[@name="duration"]', test.duration)
      ])
      .then(() => browser.waitForExist('#gtitle'))
      .then(() => browser.getText('#gtitle'))
      .then((title) => { expect(title).to.equal(test.expected); });
    });
  });

});