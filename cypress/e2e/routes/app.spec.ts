import { EXAMPLE_URL } from '../../support/constants';

describe('App test suite', () => {
  it('should check app is rendering correctly', () => {
    cy.visit(EXAMPLE_URL);

    cy.contains('example project!').should('be.visible');
  });
});
