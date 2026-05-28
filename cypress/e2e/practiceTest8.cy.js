import 'cypress-iframe'


describe('Practice Test 6 ', () => {



    it('Handling Child tabs', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('.space-x-4 a[href*="mentorship"]').click({ force: true })







    })
})