const spider = require('../spider/index');
const assert=require('assert')

describe("测试爬虫",function () {
    before(function () {

    })
    after(function () {

    })

    it("测试request",function (done) {
        const options = {
            host: 'johnyu.cn',
            port: 3000,
            path: '/albums'
        };
        spider.request(options, function (err, albums) {
            assert(!err);
        })
        done();
    })


})