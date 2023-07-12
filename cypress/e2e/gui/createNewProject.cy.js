// describe('Create New Project', () => {
//     beforeEach(() => {
//         cy.login()
//         cy.visit('/')
//     })

//     it('successfully', () => {
//         const projectName = Cypress._.random(0, 1e6)
//         //const id = projectName()
//         cy.get('.dropdown-menu-right')                
//         .find('ul')
//         .contains('New project')
//         .click({ force: true })
//         .get('input#project_name.form-control.input-lg')
//         .first()
//         .type(`Teste${projectName}`)
//         .get('input[type="submit"].project-submit')
//         .first()
//         .click()
//         cy.get('.flash-notice > span')
//         .should('contain', 'successfully')
//     })
// })

import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => {
    //cy.login()
    cy.visit('/')
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})