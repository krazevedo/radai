describe('Nearest Food Trucks - Response Structure', () => {
  it('should return nearest food trucks', () => {
    const latitude = 40.712776;
    const longitude = -74.005974; // Example coordinates
    cy.request({
      method: 'GET',
      url: `api/MobileFoodTrucks/nearestFoodTrucks?latitude=${latitude}&longitude=${longitude}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.eq(235);
      response.body.forEach(checkTrucks);
    });

    function checkTrucks(element) {
      cy.validateSchema(element);
    }
  });

  it('should return nearest food trucks with blank latitude and longitude', () => {
    cy.request({
      method: 'GET',
      url: `api/MobileFoodTrucks/nearestFoodTrucks?latitude=&longitude=`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.eq(235);
      response.body.forEach(checkTrucks);
    });

    function checkTrucks(element) {
      cy.validateSchema(element);
    }
  });
});

describe('Nearest Food Trucks - Failed response', () => {
  it('should fail when latitude and longitude are string', () => {
    const latitude = 'lat';
    const longitude = 'lon'; // Example coordinates
    cy.request({
      method: 'GET',
      url: `api/MobileFoodTrucks/nearestFoodTrucks?latitude=${latitude}&longitude=${longitude}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.errors.latitude[0]).to.include(
        "The value 'lat' is not valid"
      );
      expect(response.body.errors.longitude[0]).to.include(
        "The value 'lon' is not valid"
      );
    });
  });
});
