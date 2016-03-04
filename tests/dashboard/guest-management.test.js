const common = require('../common'),
      expect = require('chai').expect;

describe('Guest Management', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
  it('should navigate to Guest Management', () =>
    common.clickSidebarTab(browser, 'Guest Management'));
});
