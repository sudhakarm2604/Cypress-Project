

describe("My First Cypress Test", () => {


    it("Practice Test", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.origin('https://www.qaclickacademy.com/', () =>
             
            {
            cy.get('.sub-menu-bar a[href*="blog"]').click()

            cy.get('#wp--skip-link--target h1').should('have.contain', 'Mindblown');

        })



    })



})
