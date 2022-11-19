const usuarios = require('../../fixtures/usuario.json')

describe('Registro de usuário alura pic', () => {
    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com');
    })
    it('Verifica mensagens de campos obrigatórios', () => {
        cy.camposObrigatorios();
    })

    it('Verifica mensagens de email inválido', () => {
       
        cy.emailValido('Teste');
    })

    it('Verifica mensagens de senha com menos de 8 caracteres', () => {
       cy.tamanhoSenha('123');
    })

    it('Verifica mensagens de nome de usuário tem que ser com letra minúscula', () => {
        cy.lowerCase('AAA');
    })

    usuarios.forEach(usuario => {
        it(`Registrar um novo usuário ${usuario.userName}`, () => {
            cy.registrarNovoUsuario(usuario.email, usuario.fullName, usuario.userName, usuario.password);
            cy.contains('h4', 'Login').should('be.visible');
        })
    })
})