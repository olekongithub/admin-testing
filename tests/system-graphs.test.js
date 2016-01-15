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
    //CPU
    { name: 'cpu by hour', metric: 'cpu', duration: '1 Hour', expected: 'CPU Usage Past Hour' },
    { name: 'cpu by hour', metric: 'cpu', duration: '2 Hours', expected: 'CPU Usage Past Hour' },
    { name: 'cpu by hour', metric: 'cpu', duration: '6 Hours', expected: 'CPU Usage Past Hour' },
    { name: 'cpu by hour', metric: 'cpu', duration: '12 Hours', expected: 'CPU Usage Past Hour' },
    { name: 'cpu by Day', metric: 'cpu', duration: '1 Day', expected: 'CPU Usage Past Day' },
    { name: 'cpu by week', metric: 'cpu', duration: '1 Week', expected: 'CPU Usage Past Week' },
    { name: 'cpu by month', metric: 'cpu', duration: '1 Month', expected: 'CPU Usage Past Month' },

    //Load
    { name: 'load by hour', metric: 'load', duration: '1 Hour', expected: 'System Load Past Hour' },
    { name: 'load by hour', metric: 'load', duration: '2 Hours', expected: 'System Load Past Hour' },
    { name: 'load by hour', metric: 'load', duration: '6 Hours', expected: 'System Load Past Hour' },
    { name: 'load by hour', metric: 'load', duration: '12 Hours', expected: 'System Load Past Hour' },
    { name: 'load by Day', metric: 'load', duration: '1 Day', expected: 'System Load Past Day' },
    { name: 'load by week', metric: 'load', duration: '1 Week', expected: 'System Load Past Week' },
    { name: 'load by month', metric: 'load', duration: '1 Month', expected: 'System Load Past Month' },

    //mem
    { name: 'load by hour', metric: 'mem', duration: '1 Hour', expected: 'System Memory Past Hour' },
    { name: 'load by hour', metric: 'mem', duration: '2 Hours', expected: 'System Memory Past Hour' },
    { name: 'load by hour', metric: 'mem', duration: '6 Hours', expected: 'System Memory Past Hour' },
    { name: 'load by hour', metric: 'mem', duration: '12 Hours', expected: 'System Memory Past Hour' },
    { name: 'load by Day', metric: 'mem', duration: '1 Day', expected: 'System Memory Past Day' },
    { name: 'load by week', metric: 'mem', duration: '1 Week', expected: 'System Memory Past Week' },
    { name: 'load by month', metric: 'mem', duration: '1 Month', expected: 'System Memory Past Month' }
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