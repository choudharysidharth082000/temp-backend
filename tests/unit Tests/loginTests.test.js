

// const request = require('supertest');
// const app = require('../../server');


describe('Sample Test', ()=>
{
      
    //   afterEach((done) => {
    //     mongoose.connection.dropDatabase(() => {
    //       mongoose.connection.close(() => done())
    //     });
    //   });

      it('GET /v1/auth/testSample', async ()=>
      {
          await supertest(app).get('/v1/auth/testSample').expect(200).then((response)=>
          {
            // expect(isObject(response.body)).toBeTruthy();
            //chacking if the message of the response is OK
              expect(response.body.message).toBe('OK');
            //checking if the object response returning is true
              expect(response.body.status).toBe(true)
          })
          
      })
})

describe('Testing the Login Api Flow',  ()=>
{
    beforeEach((done)=>
{
    mongoose.connect(test,()=>
    {
        done()
    } )
})

    it('This is the testing phase',  async ()=>
    {
        request(app)
  .get('/v1/auth/testSample')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
    })
    // beforeEach((done) => {
//     mongoose.connect(test,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       () => done());
//   });
    
})


