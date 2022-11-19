Cypress.Commands.add('buscarFotos', (method, url) =>{
    cy.request({
        method: method,
        url: url,

    })
});

Cypress.Commands.add('loginApi', (method, url, body) =>{
    cy.request({
        method: method,
        url: url,
        body: body
    })
})