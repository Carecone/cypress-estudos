Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.contains('button', 'login').click();
});

Cypress.Commands.add('registrarNovoUsuario', (email, nome, usuario, senha) =>{
    cy.contains('a', 'Register now').click();
    cy.contains('button','Register').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(nome);
    cy.get('input[formcontrolname="userName"]').type(usuario);
    cy.get('input[placeholder="password"]').type(senha);
    cy.contains('small','User available').should('be.visible');
    cy.contains('button','Register').click();
    
})