const trucksApproved = require('../fixtures/searchByNameApproved.json');
const trucksRequested = require('../fixtures/searchByNameRequested.json');
const trucksSuspend = require('../fixtures/searchByNameSuspend.json');
const trucksExpired = require('../fixtures/searchByNameExpired.json');
const trucks = require('../fixtures/searchByName.json');

describe('Search By Name', () => {
  it('should return food trucks by name', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByName?name=Halal Cart of San Francisco&status=',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.above(0); // Adjust based on expected results
      response.body.forEach(checkTrucks);
    });
  });
  function checkTrucks(element, index) {
    cy.validateSchema(element);
    cy.validateData(element, index, trucks);
  }
});
describe('Search By Name and Status', () => {
  it('should return food trucks by name and status APPROVED', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByName?name=Brazuca Grill&status=APPROVED',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.above(0); // Adjust based on expected results
      response.body.forEach(checkTrucksApproved);
    });
  });

  it('should return food trucks by name and status REQUESTED', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByName?name=Halal Cart of San Francisco&status=REQUESTED',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.above(0); // Adjust based on expected results
      response.body.forEach(checkTrucksRequested);
    });
  });

  it('should return food trucks by name and status SUSPEND', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByName?name=Halal Cart of San Francisco&status=SUSPEND',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.above(0); // Adjust based on expected results
      response.body.forEach(checkTrucksSuspend);
    });
  });

  it('should return food trucks by name and status EXPIRED', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByName?name=F %26 C Catering&status=EXPIRED',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.above(0); // Adjust based on expected results
      response.body.forEach(checkTrucksExpired);
    });
  });

  function checkTrucksApproved(element, index) {
    cy.validateSchema(element);
    cy.validateData(element, index, trucksApproved);
  }
  function checkTrucksRequested(element, index) {
    cy.validateSchema(element);
    cy.validateData(element, index, trucksRequested);
  }
  function checkTrucksSuspend(element, index) {
    cy.validateSchema(element);
    cy.validateData(element, index, trucksSuspend);
  }
  function checkTrucksExpired(element, index) {
    cy.validateSchema(element);
    cy.validateData(element, index, trucksExpired);
  }
});

describe('Search By Name - Missing Name', () => {
  it('should fail when param name is not provided', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByName?status=APPROVED',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400); // Assuming 400 Bad Request for missing parameter
      expect(response.body.errors.name[0]).to.include(
        'The name field is required'
      );
    });
  });

  it('should fail when name is not provided', () => {
    cy.request({
      method: 'GET',
      url: 'api/MobileFoodTrucks/searchByName?name=&status=APPROVED',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400); // Assuming 400 Bad Request for missing parameter
      expect(response.body.errors.name[0]).to.include(
        'The name field is required'
      );
    });
  });
});
