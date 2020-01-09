
const http = require('http');

function request(options, callback) {
    const req = http.request(options);
    req.end();

    req.on('response', (info) => {
        info.on('data',function (chunk) {
            callback(null, chunk.toString());
        })
    });

    req.on('error', (err) => {
        callback(err)
    })


}

module.exports = {request};