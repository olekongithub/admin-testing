var common = require('../common'),
    expect = require('chai').expect;

describe('Convert Image', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
  it('should navigate to Convert Image', () =>
    common.clickSidebarTab(browser, 'Convert Image'));
});
