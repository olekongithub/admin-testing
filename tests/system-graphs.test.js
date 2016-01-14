var common = require('./common'),
    expect = require('chai').expect;

describe.only('System Graphs', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
  it('should navigate to system graphs', () => {
    return browser.click('//a[contains(text(), "System Graph")]')
      .then(() => browser.waitForExist('h1.page-header'))
      .then(() => browser.getText('h1.page-header'))
      .then((title) => { expect(title).to.equal('System Graphs'); });
  });

  [
    { name: 'cpu by day', metric: 'cpu', duration: '1 Day', expected: 'CPU Usage Past Day' },
    { name: 'cpu by hour', metric: 'cpu', duration: '1 Hour', expected: 'CPU Usage Past Hour' },
    { name: 'cpu by week', metric: 'cpu', duration: '1 Week', expected: 'CPU Usage Past Week' },
    { name: 'cpu by month', metric: 'cpu', duration: '1 Month', expected: 'CPU Usage Past Month' },
    { name: 'cpu by dogs', metric: 'cpu', duration: '15 Dogs', expected: 'CPU Usage Past Dogs' }
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