
describe("Child window handing in Cypress", () => {

    it("Handliong child window", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        })

        cy.get('#openwindow').click()

        cy.get('@windowOpen').then((stub) => {

            const url = stub.getCall(0).args[0]
            cy.visit(url)

        })

    })

})