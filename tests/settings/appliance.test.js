const common = require('../common'),
      expect = require('chai').expect;

describe('Appliance', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
  it('should navigate to Appliance', () =>
    common.clickSidebarTab(browser, 'Appliance', 'Appliance Settings'));
});
