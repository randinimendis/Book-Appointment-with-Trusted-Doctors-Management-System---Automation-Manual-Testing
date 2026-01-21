describe("Navigate to My Profile from Dropdown and Edit", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("Login and go to My Profile page, then Edit", () => {
    // Login steps...
    cy.get(".gap-4 > .bg-primary").click();
    cy.wait(1000);
    cy.get(".text-primary").click();
    cy.wait(1000);
    cy.get(".flex > :nth-child(3) > .border").type("demo44@gmail.com");
    cy.get(":nth-child(4) > .border").type("123@test");
    cy.get(".bg-primary").contains("Login").click();
    cy.wait(2000);

    // Wait for homepage to load
    cy.get(".active > .py-1", { timeout: 10000 }).should("be.visible");
    cy.wait(5000);

    // cy.get(":nth-child(1) > .p-4").click(); // Click on the active tab (My Profile)
    // cy.wait(2000); // Wait for the page to load
    cy.get(":nth-child(2) > .p-4").click(); // Click on the "My Profile" tab
    cy.wait(2000); // Wait for the page to load

    cy.get(".sm\\:ml-72 > :nth-child(3) > :nth-child(2)").click();
    // cy.get(".text-sm").eq(2).click(); // or use `.contains()` if it has known text
    // Click on the "Edit" button
    // Click
    cy.wait(2000); // Wait for the edit form to load

    cy.get(".px-20").click(); // Click on the "Save" button

    // // cy.get(".group").first().trigger("mouseover");
    // cy.get(".w-2.5").invoke("show");

    // cy.wait(500); // Adjust time as needed
  });
});
