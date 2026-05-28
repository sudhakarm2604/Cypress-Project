describe('Practice Test 6 ', () => {



    it('Handling Mouse Hover', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        cy.get('div .mouse-hover-content ').invoke('show')

        cy.contains('Top').click()

        cy.url().should('include', 'top')






    })
})