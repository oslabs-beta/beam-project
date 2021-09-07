//install SuperTest
const request = require('supertest');
import router from ('/server/router.js');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('GET /tableData', function() {
    it('responds with 200 status and json content', function(done) {
      return request(server)
        .post('/api/uri')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
})
