/// <reference types="cypress" /> 


import  AmatriumElements  from './AmtriumElements.js';

context('Amatrium Main Menu test matrix', () => {
    before(() => {
      cy.visit('dev.amatrium.com')
    });

    describe('Amatrium Main Menu test matrix', () => {

it('It will navigate to Privacy Policy', () => { 
    expect(AmatriumElements.PrivacyPolicyOpenButton, 'Privacy Policy Open button should be available').to.exist
    cy.get(AmatriumElements.PrivacyPolicyOpenButton).click()
}
) ;

it('It will check Privacy Policy panel ', () => { 
    
    cy.get(AmatriumElements.PrivacyPolicyPanelHeader).should('have.text','Privacy Policy').click()
}
) ;

it('It will close Privacy Policy', () => { 
    expect(AmatriumElements.PrivacyPolicyCloseButton, 'Privacy Policy Close button should be available').to.exist
    cy.get(AmatriumElements.PrivacyPolicyCloseButton).click()
}
) ;

it('It will open Term', () => { 
    expect(AmatriumElements.TermOpenButton, 'Term Open button should be available').to.exist
    cy.contains('Terms').click()
    //cy.get(AmatriumElements.TermOpenButton).click()
}
) ;
 
it('It will check Term panel ', () => { 
    
    cy.get('#chakra-modal--header-5').should('have.text','Terms of Service')
}
) ;

it('It will close Term', () => { 
    expect(AmatriumElements.TermCloseButton, 'Term Close button should be available').to.exist
    cy.get(AmatriumElements.TermCloseButton).click()
}
) ;

it('It will input email in Email Address field', () => { 
    cy.get(AmatriumElements.EmailAddressField)
    .type("britishcolumbia247@gmail.com", {timeout: 5000}).should('have.value','britishcolumbia247@gmail.com')

}
) ;

it('It will input password in Password field', () => { 
    cy.get(AmatriumElements.PassWordField).type("w7ekg2w", {timeout: 5000}).should('have.value','w7ekg2w')

    
}
) ;

it('It will unhide password in Password field', () => { 
    cy.get(AmatriumElements.PassWordHideButton).should('exist')
    cy.get(AmatriumElements.PassWordHideButton).click()
    
}
) ;

it('It will rehide password in Password field', () => { 
    cy.get(AmatriumElements.PassWordHideButton).should('exist')
    cy.get(AmatriumElements.PassWordHideButton).click()
    
}
) ;

it('It will check Login button', () => { 
    cy.get(AmatriumElements.Loginbutton).should('exist').should('have.text','Login')
    cy.get(AmatriumElements.Loginbutton,{timeout: 6000}).click()
    
}
) ;

})
});