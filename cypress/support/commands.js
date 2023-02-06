// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.session(`user-${username}`, () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Login').click();
    cy.origin('cypresstestapps.us.auth0.com', { args: { username, password } },
      ({username, password}) => {
      cy.get('input[type=text]').type(username);
      cy.get('input[type=password').type(password);
      cy.get('button[name=action]').click();
    });
    cy.get('button').contains('Logout');
  });
  cy.visit('http://localhost:3000');
});
