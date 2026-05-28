// < reference types="Cypress" />

describe('JWT Session Test', () => {


    it('logged through local storage', () => {

        cy.LoginAPI().then(function () {

            cy.visit("https://rahulshettyacademy.com/client/",

                {

                    onBeforeLoad: function (window) {


                        window.localStorage.setItem('token', Cypress.env('token'))
                    }

                })


        })


        


    })


})