/// <reference types="cypress" />

describe("login form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("greets with Login", () => {
    cy.get("h1").should("contain", "Login");
  });
});
