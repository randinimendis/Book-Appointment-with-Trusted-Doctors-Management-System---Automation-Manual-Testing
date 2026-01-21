describe("Navigate to My Profile from Dropdown and Edit", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("Login ", () => {
    // Login steps...
    cy.get(".gap-4 > .bg-primary").click();
    cy.wait(1000);
    cy.get(".text-primary").click();
    cy.wait(1000);
    cy.get(".flex > :nth-child(3) > .border").type("demo44@gmail.com");
    cy.get(":nth-child(4) > .border").type("123@test");
    cy.get(".bg-primary").contains("Login").click();
    cy.wait(2000);
  });
});
