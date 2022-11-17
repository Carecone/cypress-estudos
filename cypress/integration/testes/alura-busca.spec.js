describe('Alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('www.alura.com.br');
    })


    it('Buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get(':nth-child(5) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
            .should('have.text', 'Formação Java e Orientação a Objetos');
    })
})