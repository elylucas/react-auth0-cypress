describe('home page', () => {
  describe('when user is not logged in', () => {
    it('there should be a login button', () => {
      cy.visit('http://localhost:3000');
      cy.get('button').contains('Login');
    });
  });

  describe('when user is logged in', () => {
    beforeEach(() => {
      cy.login('<< Your Auth0 Test User >>', '<< Your Auth0 Test User Password >>');
    });

    it('should display logout button', () => {
      cy.get('button').contains('Logout');
    });

    it('should display logout button', () => {
      cy.get('button').contains('Logout');
    });

    it('should display user avatar', () => {
      cy.get('[data-cy=avatar]').should('exist');
    });

    it('should display user name', () => {
      cy.get('[data-cy=name]').should('contain', 'Test User');
    });

    it('should display user email', () => {
      cy.get('[data-cy=email]').should('contain', 'test@test.com');
    });
  });
});
