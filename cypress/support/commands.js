// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('validateSchema', (element) => {
  expect(element).to.have.property('id');
  expect(element).to.have.property('applicant');
  expect(element).to.have.property('facilityType');
  expect(element).to.have.property('status');
  expect(element).to.have.property('foodItems');
  expect(element).to.have.property('address');
  expect(element).to.have.property('latitude');
  expect(element).to.have.property('longitude');
});

Cypress.Commands.add('validateData', (element, index, json) => {
  expect(element.id).to.eq(json[index].id);
  expect(element.applicant).to.eq(json[index].applicant);
  expect(element.facilityType).to.eq(json[index].facilityType);
  expect(element.status).to.eq(json[index].status);
  expect(element.foodItems).to.eq(json[index].foodItems);
  expect(element.address).to.eq(json[index].address);
  expect(element.latitude).to.eq(json[index].latitude);
  expect(element.longitude).to.eq(json[index].longitude);
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
