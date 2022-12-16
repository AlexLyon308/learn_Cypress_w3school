/// <reference types="cypress" /> 


import AmatriumElements from './AmtriumElements.js';

context('Amatrium Main Menu test matrix', () => {
  before(() => {
    cy.visit('dev.amatrium.com');

    cy.get(AmatriumElements.emailAddressField)
      .type("britishcolumbia247@gmail.com");

    cy.get(AmatriumElements.passwordField)
      .type("w7ekg2w");

    cy.get(AmatriumElements.loginButton)
      .click();
  });

  describe('Amatrium Main Menu test matrix', () => {

    it('It will check "How it works" feature ', () => {

      cy.get(AmatriumElements.mainScreen_HowItWorks)
        .should((item) => {
          expect(item).to.exist;
          expect(item).to.have.text('How it works');
        });

      cy.get(AmatriumElements.mainScreen_HowItWorks_Tooltips)
        .should((item) => {
          expect(item).to.exist;
          expect(item).to.have.text('Want to see how it works?');
        });

      //cy.get(AmatriumElements.mainScreen_UnitConversionTable_Button).trigger('mouseover', {force:true})

      cy.get(AmatriumElements.mainScreen_HowItWorks_SkipButton)
        .should('exist')
        .click();

    });

    it('It will check "How it works" video', () => {
      cy.get(AmatriumElements.mainScreen_HowItWorks).click();

      cy.get(AmatriumElements.mainScreen_HowItWorks_IntroductionVideo)
        .should((item) => {
          expect(item).to.exist;
          expect(item).to.be.visible;
        });

        cy.get(AmatriumElements.mainScreen_HowItWorks_IntroductionVideo_CloseButton)
      .should((item) => {
        expect(item).to.exist;
        expect(item).to.be.visible;
      });

    cy.get(AmatriumElements.mainScreen_HowItWorks_IntroductionVideo_CloseButton)
      .click();

    });

    it('It will check Copyright label', () => {
      cy.get(AmatriumElements.mainScreen_Label)
        .should('exist')
        .should('have.text', '© 2022 AMATRIUM INC, ALL RIGHTS RESERVED');
    });

    
  

  it('It will check "Privacy" panel', () => {
    cy.get(AmatriumElements.mainScreen_Privacy)
      .should('exist')
      .click();

    cy.get(AmatriumElements.mainScreen_Privacy_Header)
      .should('have.text', 'Privacy Policy');

    cy.get(AmatriumElements.mainScreen_Privacy_CloseButton)
      .should('exist')
      .click();

  });

  it('It will check "Terms" panel', () => {
    cy.get(AmatriumElements.mainScreen_Terms)
      .should('exist')
      .click();

    cy.get(AmatriumElements.mainScreen_Terms_Header)
      .should('have.text', 'Terms of Service');

    cy.get(AmatriumElements.mainScreen_Terms_CloseButton)
      .should('exist')
      .click();

  });

  it('It will check Unit Conversion Table', () => { 
    cy.get(AmatriumElements.mainScreen_UnitConversionTable)
      .should('exist')
      .click();

    cy.get(AmatriumElements.mainScreen_UnitConversionTable_Header)
      .should('have.text', 'Unit conversion table');

    cy.get('#chakra-modal--body-14').scrollTo('bottom')

    cy.get(AmatriumElements.mainScreen_UnitConversionTable_CloseButton)
      .should('exist')
      .click();

  });

  it('It will check Send Your Suggestion if failed', () => { 
    cy.get(AmatriumElements.mainScreen_SendYourSuggestion)
      .should('exist')
      .click();

    cy.get(AmatriumElements.mainScreen_SendYourSuggestion_Header)
      .should('have.text', 'Send your suggestion to Amatrium');

    cy.get(AmatriumElements.mainScreen_SendYourSuggestion_TextBox)
      .should('exist');
      
    cy.get(AmatriumElements.mainScreen_SendYourSuggestion_SendButton)
      .should('exist') 
      .should('have.text','Send') 
      .click(); 

    cy.get(AmatriumElements.mainScreen_SendYourSuggestion_Feedback)
      .should('exist')
      .should('have.text', 'Suggestion is required'); 

      cy.get(AmatriumElements.mainScreen_SendYourSuggestion_CloseButton)
      .should('exist')
      .should('have.text','Close') 
      .click();

  });

  it('It will check Send Your Suggestion if successful', () => { 
    cy.get(AmatriumElements.mainScreen_SendYourSuggestion)
    .should('exist')
    .click();

  cy.get(AmatriumElements.mainScreen_SendYourSuggestion_Header)
    .should('have.text', 'Send your suggestion to Amatrium');

  cy.get(AmatriumElements.mainScreen_SendYourSuggestion_TextBox)
    .should('exist')
    .type('test');
    
  cy.get(AmatriumElements.mainScreen_SendYourSuggestion_SendButton)
    .should('exist') 
    .should('have.text','Send') 
    .click()
    .wait(2000); 

  cy.get(AmatriumElements.mainScreen_SendYourSuggestion_Feedback)
    .should('not.exist')
    

  cy.get(AmatriumElements.mainScreen_SendYourSuggestion_CloseButton)
    .should('exist')
    .should('have.text','Close') 
    .click();

 

  });

});

});