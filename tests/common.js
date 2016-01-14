var expect = require('chai').expect;

module.exports = {
  login: function(browser, username, password, domain) {
    return browser.url('/').getTitle()
      .then((title) => {
        expect(title).to.equal('hiveIO Appliance | hio-01');
      })
      .then(() => browser.setValue('//input[@name="username"]', username))
      .then(() => browser.setValue('//input[@name="password"]', password))
      .then(() => browser.selectByVisibleText('//select[@name="domain"]', domain))
      .then(() => browser.click('//button[@type="submit"]'))
      .then(() => browser.waitForExist('h1.page-header'));
  }
};
