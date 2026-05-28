describe('Practice Test 6 ', () => {



    it('Handling Child tabs', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        cy.get('#opentab').then(function (el) {

            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () => {

                cy.get('#navbarSupportedContent a[href*="about"]').click()

                cy.url().should('include', 'about')


            })

        })


    })
})