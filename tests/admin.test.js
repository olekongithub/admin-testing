var common = require('./common'),
    expect = require('chai').expect;
    before(() => common.login(browser, 'admin', 'admin', 'local'));

// ---------------------------- Inventory ----------------------------

// Dashboard

describe('Dashboard', () => {
  it('should navigate to Dashboard', () => {
    return browser.click('//a[contains(text(), "Dashboard")]')
      .then(() => browser.waitForExist('h1.page-header'))
      .then(() => browser.getText('h1.page-header'))
      .then((title) => { expect(title).to.equal('Dashboard'); });
  });
});

// System Graph

describe('System Graphs', () => {
  it('should navigate to system graphs', () => {
      return browser.click('//a[contains(text(), "System Graph")]')
        .then(() => browser.waitForExist('h1.page-header'))
        .then(() => browser.getText('h1.page-header'))
        .then((title) => { expect(title).to.equal('System Graphs'); });
  });

  [
    //CPU
    { name: 'cpu by hour', metric: 'cpu', duration: '1 Hour', expected: 'CPU Usage Past Hour' },
    { name: 'cpu by Past 2 hours', metric: 'cpu', duration: '2 Hours', expected: 'CPU Usage Past 2 Hours' },
    { name: 'cpu by Past 6 hours', metric: 'cpu', duration: '6 Hours', expected: 'CPU Usage Past 6 Hours' },
    { name: 'cpu by hour', metric: 'cpu', duration: '12 Hours', expected: 'CPU Usage Past 12 Hours' },
    { name: 'cpu by Day', metric: 'cpu', duration: '1 Day', expected: 'CPU Usage Past Day' },
    { name: 'cpu by week', metric: 'cpu', duration: '1 Week', expected: 'CPU Usage Past Week' },
    { name: 'cpu by month', metric: 'cpu', duration: '1 Month', expected: 'CPU Usage Past Month' },

    //Load
    { name: 'load by hour', metric: 'load', duration: '1 Hour', expected: 'System Load Past Hour' },
    { name: 'load by hour', metric: 'load', duration: '2 Hours', expected: 'System Load Past 2 Hours' },
    { name: 'load by hour', metric: 'load', duration: '6 Hours', expected: 'System Load Past 6 Hours' },
    { name: 'load by hour', metric: 'load', duration: '12 Hours', expected: 'System Load Past 12 Hours' },
    { name: 'load by Day', metric: 'load', duration: '1 Day', expected: 'System Load Past Day' },
    { name: 'load by week', metric: 'load', duration: '1 Week', expected: 'System Load Past Week' },
    { name: 'load by month', metric: 'load', duration: '1 Month', expected: 'System Load Past Month' },

    //mem
    { name: 'load by hour', metric: 'mem', duration: '1 Hour', expected: 'System Memory Past Hour' },
    { name: 'load by hour', metric: 'mem', duration: '2 Hours', expected: 'System Memory Past 2 Hours' },
    { name: 'load by hour', metric: 'mem', duration: '6 Hours', expected: 'System Memory Past 6 Hours' },
    { name: 'load by hour', metric: 'mem', duration: '12 Hours', expected: 'System Memory Past 12 Hours' },
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


    // Network Graphs

    describe('Network Graphs', () => {
        it('should navigate to Network Graphs', () => {
            return browser.click('//a[contains(text(), "Network Graph")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Network Graphs'); });
        });

        [
    //Eth0
    { name: 'Eth0 Past Hour', metric: 'Eth0', duration: '1 Hour', expected: 'Eth0 Past Hour' },
    { name: 'Eth0 Past 2 Hours', metric: 'Eth0', duration: '2 Hours', expected: 'Eth0 Past 2 Hours' },
    { name: 'Eth0 Past 6 Hours', metric: 'Eth0', duration: '6 Hours', expected: 'Eth0 Past 6 Hours' },
    { name: 'Eth0 Past 12 Hours', metric: 'Eth0', duration: '12 Hours', expected: 'Eth0 Past 12 Hours' },
    { name: 'Eth0 Past Day', metric: 'Eth0', duration: '1 Day', expected: 'Eth0 Past Day' },
    { name: 'Eth0 Past Week', metric: 'Eth0', duration: '1 Week', expected: 'Eth0 Past Week' },
    { name: 'Eth0 Past Month', metric: 'Eth0', duration: '1 Month', expected: 'Eth0 Past Month' },
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


    // Guest Management

    describe('Guest Management', () => {
        it('should navigate to Guest Management', () => {
            return browser.click('//a[contains(text(), "Guest Management")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Guest Management'); });
        });
    });


// ---------------------------- Settings ----------------------------

  // Appliance

    describe('Appliance', () => {
        it('should navigate to Appliance', () => {
            return browser.click('//a[contains(text(), "Appliance")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Appliance Settings'); });
        });
    });

    // Management Network

    describe('Management Network', () => {
        it('should navigate to Management Network', () => {
            return browser.click('//a[contains(text(), "Management Network")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Management Network'); });
        });
    });

    // Management Network

    describe('Production Network', () => {
        it('should navigate to Production Network', () => {
            return browser.click('//a[contains(text(), "Production Network")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Interface Assignments'); });
        });
    });

    // Firmware Management

    describe('Firmware', () => {
        it('should navigate to Firmware', () => {
            return browser.click('//a[contains(text(), "Firmware")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Firmware Management'); });
        });
    });

    // Power

    describe('Power', () => {
        it('should navigate to Power', () => {
            return browser.click('//a[contains(text(), "Power")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Power Options'); });
        });
    });


// ---------------------------- Publishing ----------------------------

// Templates

    describe('Templates', () => {
        it('should navigate to Templates', () => {
            return browser.click('//a[contains(text(), "Templates")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Templates'); });
        });

        it('should navigate to Templates > New Template', () => {
            //return browser.click('//b[contains(text(), "New Template")]')
            return browser.click('button[id=new_tmpl]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then(() => browser.setValue('//input[@name="name"]', 'Windows 10.1 x64 RE'))
            .then((title) => { expect(title).to.equal('Create New Template'); });
        });
    });

    // Guest Pools

    describe('Guest Pools', () => {
        it('should navigate to Guest Pools', () => {
            return browser.click('//a[contains(text(), "Guest Pools")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Guest Pools'); });
        });
    });

    // Convert Image

    describe('Convert Image', () => {
        it('should navigate to Convert Image', () => {
            return browser.click('//a[contains(text(), "Convert Image")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Convert Image'); });
        });
    });

// ---------------------------- Administration ----------------------------

    // Users

    describe('Users', () => {
        it('should navigate to Convert Image', () => {
            return browser.click('//a[contains(text(), "Users")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('System Users'); });
        });
    });

    // Realms

    describe('Realms', () => {
        it('should navigate to Realms', () => {
            return browser.click('//a[contains(text(), "Realms")]')
            .then(() => browser.waitForExist('h1.page-header'))
            .then(() => browser.getText('h1.page-header'))
            .then((title) => { expect(title).to.equal('Realms'); });
        });
    });