describe("Registration Test Suite", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/");
  });

  it("Verify that user can log in successfully and access the patient page", () => {
    // Logging in with credentials
    cy.get(".flex > :nth-child(2) > .border").type("admin@example.com"); // Enter email
    cy.wait(1000); // Wait for typing

    cy.get(":nth-child(3) > .border").type("greatstack123"); // Enter password
    cy.wait(1000); // Wait for typing

    cy.get(".bg-primary").click(); // Click the login button
    cy.wait(2000); // Wait for the page to load after login

    cy.contains("Add Doctor").click();

    // Optionally verify redirection or visible content
    cy.url().should("include", "/add-doctor"); // Adjust path as per your routing
    cy.get(":nth-child(1) > :nth-child(1) > .border").type("John"); // Enter name
    cy.wait(1000); // Wait for typing

    cy.get(":nth-child(1) > :nth-child(2) > .border").type("john1@gmail.com"); // Enter email
    cy.wait(1000); // Wait for typing

    cy.get(":nth-child(1) > :nth-child(3) > .border").type("password123"); // Enter password
    cy.wait(1000); // Wait for typing

    cy.get(":nth-child(4) > .border").select("3 Years"); // Select experience
    cy.wait(1000); // Wait for typing

    cy.get(":nth-child(5) > .border").type(100000); // Enter price
    cy.wait(1000); // Wait for typing

    //cy.get('.lg\:flex-row > :nth-child(2) > :nth-child(1) > .border')

    cy.get(".lg\\:flex-row > :nth-child(2) > :nth-child(1) > .border").select(
      "Neurologist"
    );
    // Enter speciality
    cy.wait(1000); // Wait for typing

    cy.get(":nth-child(2) > :nth-child(2) > .border")
      .first()
      .type("doctor msc");

    cy.wait(1000); // Wait for typing

    cy.get('[placeholder="Address 1"]').type("123 Main St"); // Enter address 1
    cy.wait(1000); // Wait for typing
    cy.get('[placeholder="Address 2"]').type("Apt 4B"); // Enter address 2
    cy.wait(1000); // Wait for typing

    cy.get(".bg-white > :nth-child(2) > .w-full").type("New York");

    cy.get(".m-5 > .bg-white > .bg-primary").click(); // Click the submit button

    // cy.get(".bg-white > :nth-child(3) > .w-full").type("New York"); // Enter city
    // cy.wait(1000); // Wait for typing
  });
});
