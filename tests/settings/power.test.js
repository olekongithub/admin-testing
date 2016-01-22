var common = require('../common'),
    expect = require('chai').expect;

describe('Power', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
  it('should navigate to Power', () =>
    common.clickSidebarTab(browser, 'Power', 'Power Options'));
});
