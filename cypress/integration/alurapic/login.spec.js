const usuarios = require('../../fixtures/usuario.json')


describe('Login de usuário alura pic', () => {
    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com');
    })

    it('Verificar usuário válido', () => {
        cy.login('flavio', '123')
        cy.contains('a', 'Logout').should('be.visible');
    })

    it('Verificar usuário inválido', () => {
        cy.login('carecone', '123')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
})