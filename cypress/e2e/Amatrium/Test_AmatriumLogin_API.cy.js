/// <reference types="cypress" /> 



context('Amatrium  API test matrix', () => {
    before(() => {
        cy.visit('dev.amatrium.com');

    });

    describe('test api', () => {

        /* API Example with dev.amatrium 
  it('Login API', function() {

        cy.request('POST', 'https://api-dev.amatrium.com/api/v1/login', {

            'email': "admin@amatrium.com",

            'password': "Admin@1234!$"

        }).then(res => {

            cy.log(res.body.token)

            token = res.body.token

        })

    })

    it('test scope', function(){

        cy.request({

            method: 'POST',

            url : 'https://api-dev.amatrium.com/api/v1/materials/extractData',

            headers: {

                authorization: `Bearer ${token}`

            },

            body: {

                message: "abc"

            }

        }).then(res => {

            cy.log(res.body)

        })

    })
        */

        let token = '';

        it('It will check Login API', function () {

            cy
                .request({
                    method: 'POST',
                    url: 'https://api-dev.amatrium.com/api/v1/login',
                    body:
                    {
                        "email": "britishcolumbia247@gmail.com",
                        "password": "w7ekg2w"
                    }
                }).then(res => {

                    cy.log(res.body);
                    cy.log(res.body.token);
                    cy.log(res.body.user.email);

                    expect(res.body.success).to.be.true;
                    expect(res.body.user.email).to.contain.string("britishcolumbia247@gmail.com");
                    expect(res.body.user.username).to.contain.string("Alexandre Lyon");
                });
                
            
            

        });

    })





})

