var common = require('../common'),
    expect = require('chai').expect;

describe('Realms', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
  it('should navigate to Realms', () => common.clickSidebarTab(browser, 'Realms'));
});