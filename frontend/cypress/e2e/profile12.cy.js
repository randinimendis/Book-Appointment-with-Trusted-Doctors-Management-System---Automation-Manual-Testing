// import "cypress-iframe";

// describe("Navigate to My Profile from Dropdown and Edit", () => {
//   beforeEach(() => {
//     cy.visit("http://127.0.0.1:5173/");
//   });

//   it("Login and go to My Profile page, then Edit", () => {
//     // Step 1: Open login modal
//     cy.get(".gap-4 > .bg-primary").click();
//     cy.wait(1000);
//     cy.get(".text-primary").click();
//     cy.wait(1000);

//     // Step 2: Enter credentials
//     cy.get(".flex > :nth-child(3) > .border").type("demo44@gmail.com");
//     cy.wait(1000);
//     cy.get(":nth-child(4) > .border").type("123@test");
//     cy.wait(1000);
//     cy.get(".bg-primary").contains("Login").click();
//     cy.wait(1000);

//     // Step 3: Wait until homepage loads
//     cy.get(".active > .py-1", { timeout: 10000 }).should("be.visible");
//     cy.wait(5000);

//     // cy.get(".flex .items-center").first().trigger("mouseover");
//     cy.frameLoaded(".razorpay-checkout-frame")
//       .iframe(".razorpay-checkout-frame")
//       .find(".group")
//       .first()
//       .trigger("mouseover");
//     cy.wait(4000);

//     // await page.locator('.flex .items-center').hover();.select("My Profile") // cy.get(".group").click();

//     // // Click "My Profile" from the dropdown
//     // cy.contains("My Profile").click();

//     // // Step 4: Click dropdown icon (recommend updating your HTML with a data-cy tag)
//     // cy.get(".group").select("My Profile");
//   });
// });

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
    cy.get(".flex > :nth-child(3) > .border").type("tharushi@gmail.com");
    cy.get(":nth-child(4) > .border").type("123@Demo");
    cy.get(".bg-primary").contains("Login").click();
    cy.wait(2000);

    cy.get(".items-center.gap-4 > .relative").click(); // Click on the dropdown icon

    cy.contains("My Profile").click();
    cy.wait(2000); // Click on the dropdown icon

    cy.get(".border").contains("Edit").click(); // Click on the "Edit" button
    cy.wait(2000); // Wait for the edit form to load

    cy.get(".max-w-52").clear().type("0761037727"); // Type into Phone input
    cy.wait(2000); // Wait for the save action to complete

    // cy.get('[value="colombo01"]').clear().type("colombo10");
    cy.get('[value="Colombo01"]').clear().type("Colombo 10"); // Type into Address inputS
    cy.wait(2000); // Wait for the save action to complete

    cy.get(".max-w-20").select("Male");
    cy.wait(2000); // Wait for the save action to complete

    cy.get(".max-w-28").clear().type("1998-10-01"); // Enter Birthday

    cy.get(".border").contains("Save").click(); // Click on the "Save" button
    cy.wait(2000); // Wait for the save action to complete

    // // Type into Phone input
    // cy.get('input[placeholder="Phone"]') // or use position if no placeholder
    //   .clear()
    //   .type("0771234567");

    // // Type into Address input (likely a textarea or input)
    // cy.get('input[placeholder="Address"]').clear().type("123, Main Street");

    // // Select Gender
    // cy.get("select") // use more specific selector if possible
    //   .select("Female"); // or 'Male', depending on options

    // // Enter Birthday
    // cy.get('input[type="date"]').type("1998-10-01"); // must be in YYYY-MM-DD format

    // // Wait for homepage to load
    // cy.get(".active > .py-1", { timeout: 10000 }).should("be.visible");
    // cy.wait(5000);

    // // cy.get(".group").first().trigger("mouseover");
    // cy.get(".w-2.5").invoke("show");

    // cy.wait(500); // Adjust time as needed
  });
});
