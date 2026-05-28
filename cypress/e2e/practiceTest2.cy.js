

describe("My First Cypress Test", () => {


    it("Practice Test", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")


        cy.get(".search-keyword").type("ca")
        cy.wait(2000)

    

      cy.get(".products").find(".product").each(($el, index, $list) => {

            const vegName = $el.find("h4.product-name").text()

            if(vegName.includes("Cashews")) {

               cy.wrap($el).find("button").click()
            }

        })



        cy.get('.cart-icon > img').click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click()


    })



})
