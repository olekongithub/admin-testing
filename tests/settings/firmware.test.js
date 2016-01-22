var common = require('../common'),
    expect = require('chai').expect;

describe('Firmware', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
  it('should navigate to Firmware', () =>
    common.clickSidebarTab(browser, 'Firmware', 'Firmware Management'));
});
