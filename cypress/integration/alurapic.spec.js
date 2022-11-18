describe('Login e registro de usuário alura pic', () => {
    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com');
    })

    it('Verifica mensagens de validação', () => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('small', 'Password is required!').should('be.visible');
    })

    it('Verifica mensagens de email inválido', () =>{
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('diego');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('Verifica mensagens de senha com enos de 8 caracteres', () =>{
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('Verifica mensagens de nome de usuário tem que ser com letra minúscula', () =>{
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname="userName"]').type('AAA');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })
})