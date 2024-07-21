const trucks = require('../fixtures/searchByStreet.json');

describe('Search By Street', () => {
  it('should return food trucks by street', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByStreet?street=INDIANA ST',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.above(0); // Adjust based on expected results
      response.body.forEach(checkTrucks);
    });
  });

  it('should not return food trucks by non-exist street', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByStreet?street=testStreet',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.eq(0); // Adjust based on expected results
    });
  });

  // Helper function to check account information
  function checkTrucks(element, index) {
    cy.validateSchema(element);
    cy.validateData(element, index, trucks);
  }
});

describe('Search By Street - Missing Street', () => {
  it('should fail when param street is not provided', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByStreet?street=',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400); // Assuming 400 Bad Request for missing parameter
      expect(response.body.errors.street[0]).to.include(
        'The street field is required'
      );
    });
  });

  it('should fail when street is not provided', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByStreet',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400); // Assuming 400 Bad Request for missing parameter
      expect(response.body.errors.street[0]).to.include(
        'The street field is required'
      );
    });
  });
});
