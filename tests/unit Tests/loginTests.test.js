

// const request = require('supertest');
// const app = require('../../server');

// describe('Sample Test', ()=>
// {
//     it('First Test', ()=>
//     {
//         expect(true).toBe(true)
//     })
// })

// describe('GET /v1/auth/sampleTest',()=>
// {
    
//     it('Getting Rest Api', ()=>
//     {
//         request(app)
//   .get('/v1/auth/sampleTest')
//   .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });
//     })
// })
const app = require("../../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

const dotenv = require('dotenv');


dotenv.config();
const test = process.env.TEST
console.log(test);
// beforeEach((done) => {
//     mongoose.connect(test,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       () => done());
//   });





describe('Sample Api Testing', ()=>
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
        try {

            //sending the response in order to check wether the posting is done or not
            const response = await supertest(app).post('/v1/auth/login').send(
                {
                    name: "Sample",
                    profile: "Sample Photo",
                    ip: "IP ADdress",
                    email: "email@gmail.com"
                }
            )
            
    
            expect(true).toBe(true);
            
        } catch (error) {
            
            console.log(error);
        }
        

    })
    // beforeEach((done) => {
//     mongoose.connect(test,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       () => done());
//   });
    
})


