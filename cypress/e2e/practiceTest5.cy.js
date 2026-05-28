

describe('Practice Test 5', () => {


    it('should visit table and verify the price ', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {


            const Text = $el.text()

            if (Text.includes('TestNG')) {

                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {

                    const priceText = price.text()

                    expect(priceText).to.equal('20')



                })

            }



        })




    })
})