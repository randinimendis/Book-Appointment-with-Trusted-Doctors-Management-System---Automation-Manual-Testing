describe("admin login", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/");
  });

  it("Admin Login", () => {
    // Clicking the login button

    // Logging in with credentials
    cy.get(".flex > :nth-child(2) > .border").type("admin@example.com"); // Enter email
    cy.wait(1000); // Wait for typing

    cy.get(":nth-child(3) > .border").type("greatstack123"); // Enter password
    cy.wait(1000); // Wait for typing

    cy.get(".bg-primary").click(); // Click the login button
    cy.wait(2000); // Wait for the page to load after login
  });
});
