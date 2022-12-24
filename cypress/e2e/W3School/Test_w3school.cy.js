/// <reference types="cypress" /> 

import LoginScreen from '../../fixtures/W3School_WebPages/LoginScreen.js';

describe('W3School Login Screen test matrix', () => {
  
  before(() => {
    cy.visit('https://profile.w3schools.com/');
    cy.clearLocalStorage();
  });

  /*
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
*/

  it('Check TradeMark', () => {
    cy.get(LoginScreen.TradeMark)
      .should((item) => {
        expect(item).to.exist
        expect(item).to.contain.text('All rights reserved')
      });
      
  });

  it('Check Privacy', () => {
    cy.get(LoginScreen.Privacy)
      .should( (item) => {
        expect(item).to.exist
        expect(item).to.contain.text('Privacy')
      })
      .invoke('removeAttr', 'target')
      .click({ timeout: 5000 });

      cy.url()
       .should('include', 'https://www.w3schools.com/about/about_privacy.asp')
       .wait(2000);
      
       cy.clearLocalStorage();

    cy.get(LoginScreen.PrivacyHeader)
      .should('have.text','About Privacy');
      
      cy.visit('https://profile.w3schools.com/')
        .wait(2000);
      
  });

  it('Check Terms', () => {
    cy.get(LoginScreen.Terms)
    .should( (item) => {
      expect(item).to.exist;
      expect(item).to.contain.text('Terms');
    })
    .invoke('removeAttr', 'target')
    .click({ timeout: 5000 });

    cy.url()
     .should('include', 'https://www.w3schools.com/about/about_copyright.asp')
     .wait(2000);
    
     cy.clearLocalStorage();
     
  cy.get(LoginScreen.TermsHeader)
    .should('have.text','Terms of Service');
    
    cy.visit('https://profile.w3schools.com/')
      .wait(2000);
    
  });



  it('Check Login function ', () => {

    cy.get(LoginScreen.LoginField)
      .type('britishcolumbia247@gmail.com');

    cy.get(LoginScreen.PasswordField)
      .type('Thanh-13495');

    cy.get(LoginScreen.LoginButton)
      .click()
      .wait(6000);

    cy.get(LoginScreen.MyLearning_Header)
      .should('have.text','My learning');
  });



})
