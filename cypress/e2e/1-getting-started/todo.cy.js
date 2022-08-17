/// <reference types="cypress" />

describe('Tarefas', () =>{

  it('Deve inserir uma conta', ()=>{
    cy.visit('http://localhost:3000/')

    cy.get('[type="text"]').type('Isadora')
    cy.get('[type="password"]').type(12345678)
    cy.get('button').click()

    cy.get('.sc-dlfnuX').click()


    cy.get('[type="text"]').type('Dentista - 09h')
    cy.get('[type="date"]').type('2022-10-12')
    cy.get('form > button').click()
    cy.get('.excluir').click()

    cy.get('.sc-dlfnuX').click()

    cy.get('[type="text"]').type('Escola')
    cy.get('[type="date"]').type('2022-09-12')
    cy.get('form > button').click()
    cy.get('.excluir').click()

    cy.get('.sc-dlfnuX').click()

    cy.get('[type="text"]').type('Mercado')
    cy.get('[type="date"]').type('2022-08-12')
    cy.get('form > button').click()

  })

})






