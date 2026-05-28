
Cypress.Commands.add("LoginAPI", () => {

    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login",
        { "userEmail": "sudhakarm2604@gmail.com", "userPassword": "Welcome@1" }).
            then(function (response) {

                expect(response.status).to.eq(200)
                Cypress.env('token', response.body.token)

            })

        })

// Cypress.Commands.add("LoginAPI", () => {
//     cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
//         "userEmail": "sudhakarm2604@gmail.com",
//         "userPassword": "Welcome@1"
//     }).then((response) => {
//         expect(response.status).to.eq(200);
//         Cypress.env('token', response.body.token);
//     });
// });