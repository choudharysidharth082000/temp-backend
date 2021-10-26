

const request = require('supertest');
const app = require('../../server');


describe('Sample Test', ()=>
{
    it('First Test', ()=>
    {
        expect(true).toBe(true)
    })
})

describe('GET /v1/auth/sampleTest',()=>
{
    
    it('Getting Rest Api', ()=>
    {
        request(app)
       .get('/v1/auth/testSample')
       .expect(200)
     .end(function(err, res) {
    if (err) throw err;
  });
    })
})