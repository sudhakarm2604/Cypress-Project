

describe("My First Cypress Test", () => {


    it("Practice Test", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")


        cy.get(".search-keyword").type("ca")
        cy.wait(2000)


        cy.get(".product").should("have.length",5)
        cy.get(".product:visible").should("have.length",4)
        
        //Parent child Chaining

        cy.get(".products").as("productLocator")
        cy.get("@productLocator").find(".product").should("have.length",4)

        cy.get(':nth-child(2) > .product-action > button').click()

        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click()
      cy.get(".products").find(".product").each(($el, index, $list) => {

            const vegName = $el.find("h4.product-name").text()

            if(vegName.includes("Cashews")) {

               cy.wrap($el).find("button").click()
            }

        })

    })



})
