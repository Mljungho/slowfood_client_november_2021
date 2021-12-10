describe('When a user clicks on a "Add Order" button for a specific product', () => {
  before(() => {
    cy.intercept("GET", "http://localhost:3000/api/products", {
      fixture: "products.json",
    });
    cy.intercept("POST", "http://localhost:3000/api/orders", {
      fixture: "orderCreateResponse.json",
    }).as("Orders.create");
    cy.visit("/");
    cy.get("[data-cy=product-list]")
      .children()
      .first()
      .within(() => {
        cy.get("button").click();
      });
  });

  it("is expected to make a POST request to the API", () => {
    cy.wait("@Orders.create").its("request.method").should("eq", "POST");
  });

  it("is expected to render a message", () => {
    cy.get("[data-cy=message-box]").should(
      "contain.text",
      "Pizza was added to your order!"
    );
  });
});
