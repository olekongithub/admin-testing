'use strict'

const common = require('./common'),
      expect = require('chai').expect;


let itemName;

describe.only('shop for shoes on amazon', () => {
  it('should load the page', () => {
    return browser.url('/').getTitle()
      .then(title => expect(title).to.startWith('Amazon.com'))
  });

  it('should search for blue suede shoes', () => {
  	return browser.setValue('//input[@id="twotabsearchtextbox"]', 'blue suede shoes') 
  	  .click('//input[@value="Go"]');
  });
  
  it('should find the search page', () => {
  	return browser.getTitle()
  	  .then(title => expect(title).to.startWith('Amazon.com: blue suede shoes'))
  })

  it('should choose the first option', () => {
  	return browser.pause(1000)
  	  .click('.s-access-detail-page')
  })

  it('should be the first item', () => {
  	return browser.getText('#productTitle')
 	  .then(title => itemName = title)
  })

  it('should order the shoes', () => {
  	return browser.selectByIndex('#native_dropdown_selected_size_name', 3)
  	  .pause(1000)
  	  .click('#add-to-cart-button')
  	  .pause(1000)
  	  .click('#nav-cart')
  })

  it('should be in the cart', () => {
  	return browser.pause(2000)
  	  .click('div.sc-item-product-image > .sc-product-link')
  	  .getText('#productTitle')
  	  .then(text => expect(text).to.equal(itemName))
  })

});