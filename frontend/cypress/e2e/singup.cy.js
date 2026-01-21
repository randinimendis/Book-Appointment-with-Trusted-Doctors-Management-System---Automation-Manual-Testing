// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe("Navigate to My Profile from Dropdown and Edit", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("Login and go to My Profile page, then Edit", () => {
    // Login steps...
    cy.get(".gap-4 > .bg-primary").click();
    cy.wait(1000);

    cy.get(".flex > :nth-child(3) > .border").type("Menuka");
    cy.wait(1000);

    cy.get(":nth-child(4) > .border").type("Menuka@gmail.com");
    cy.wait(1000);

    cy.get(":nth-child(5) > .border").type("123@test");
    cy.wait(1000);

    cy.get(".min-h-\\[80vh\\] > .flex > .bg-primary").click(); // Click the login button
    cy.wait(5000); // Wait for the page to load after login
  });
});
