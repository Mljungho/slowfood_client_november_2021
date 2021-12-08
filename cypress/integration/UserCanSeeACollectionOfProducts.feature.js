describe("A user that visits the application", () => {
  before(() => {
    cy.intercept("GET", "**/api/products", { fixture: "products.json" }).as(
      "getProducts"
    );
    cy.visit("/");
  });

  it("is expected to make a network call with status 200", () => {
    cy.wait("@getProducts").its("status").should("eq", 200);
  });

  it("is expected to see a collection of 3 products", () => {
    cy.get("[data-cy=product-list]").children().should("have.length", 3);
  });
});
