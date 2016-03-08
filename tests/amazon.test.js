'use strict'

const common = require('./common'),
      expect = require('chai').expect;


let itemName;

describe.only('shop for shoes on amazon', () => {
  it('should load the page', () => 
    browser.url('/').getTitle()
      .then(title => expect(title).to.startWith('Amazon.com'))
  )

  it('should search for blue suede shoes', () => 
  	browser.setValue('//input[@id="twotabsearchtextbox"]', 'blue suede shoes') 
  	  .click('//input[@value="Go"]')
  )
  
  it('should find the search page', () =>
  	browser.getTitle()
  	  .then(title => expect(title).to.startWith('Amazon.com: blue suede shoes'))
  )

  it('should choose the first option', () =>
  	browser.waitForVisible('.s-access-detail-page')
  	  .click('.s-access-detail-page')
  )

  it('should be the first item', () =>
  	browser.waitForVisible('#productTitle')
      .getText('#productTitle')
 	    .then(title => itemName = title)
  )

  it('should order the shoes', () =>
  	browser.waitForVisible('#native_dropdown_selected_size_name')
      .selectByIndex('#native_dropdown_selected_size_name', 3)
  	  .pause(500)
  	  .click('#add-to-cart-button')
  	  .waitForVisible('#hlb-view-cart-announce')
  	  .click('#hlb-view-cart-announce')
  )

  it('should be in the cart', () =>
  	browser.waitForVisible('div.sc-item-product-image > .sc-product-link')
  	  .click('div.sc-item-product-image > .sc-product-link')
  	  .getText('#productTitle')
  	  .then(text => expect(text).to.equal(itemName))
  )

});