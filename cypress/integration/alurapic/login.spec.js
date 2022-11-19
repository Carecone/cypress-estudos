const usuarios = require('../../fixtures/usuario.json')


describe('Login de usuário alura pic', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.intercept('POST', `https://apialurapic.herokuapp.com/user/login`, {
            statusCode: 400
        }).as('stubPost')
    })

    it('Verificar usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPost')
        cy.contains('a', 'Logout').should('be.visible');
    })

    it('Verificar usuário inválido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
})