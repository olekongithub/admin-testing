var common = require('../common'),
    expect = require('chai').expect;

describe('Management Network', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
  it('should navigate to Management Network', () =>
    common.clickSidebarTab(browser, 'Management Network'));
});
