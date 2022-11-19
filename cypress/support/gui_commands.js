Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});
    cy.contains('button', 'login').click();
});

Cypress.Commands.add('registrarNovoUsuario', (email, fullName, userName, password) => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(fullName);
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.get('input[placeholder="password"]').type(password);
    cy.contains('small', 'User available').should('be.visible');
    cy.contains('button', 'Register').click();
});

Cypress.Commands.add('lowerCase', userName => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
});

Cypress.Commands.add('tamanhoSenha', password => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="password"]').type(password);
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
});

Cypress.Commands.add('emailValido', email => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
});

Cypress.Commands.add('camposObrigatorios', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('small', 'Password is required!').should('be.visible');
});