const app = require('./app');
const axios = require('axios');
const {expect, done} =  require("chai");
// const supertest = require('supertest');
// function request(){
//     return supertest(app.listen())
// }
describe("后台接口测试",function(){
    it('test接口测试',function(done){
        axios.get('http://localhost:10000/test')
            .then(function (response) {
                expect(response.status).to.equal(200)
                if(response.data.data == 'hello world'){
                    done();
                }else{
                    done(new Error("结果不符合预期"));
                }

            })
            .catch(function(error){
                done(error);
            })

            // request('http://localhost:10000/test')
            // .expect('Content-Type',/json/)
            // .expect(200)
            // .end(function (response) {
            //     console.log(response);
            //     if(response.data == 'hello world'){
            //         done()
            //     }else{
            //         done(err);
            //     }

            // })


    })
})