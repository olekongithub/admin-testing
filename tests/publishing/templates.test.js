var common = require('../common'),
    expect = require('chai').expect;

describe('Templates', () => {
  before(() => common.login(browser, 'admin', 'admin', 'local'));
  it('should navigate to Templates', () => common.clickSidebarTab(browser, 'Templates'));

  it('should allow user to create a new template', () => {
    return browser.click('button[id=new_tmpl]')
      .then(() => browser.waitForExist('h1.page-header'))
      .then(() => browser.getText('h1.page-header'))
      .then((title) => { expect(title).to.equal('Create New Template'); });
  });

  it('should fill in the new template data', () => {
    return browser.setValue('//input[@name="name"]', 'Windows 10.1 x64 RE');
    // .....
  });

});


