const https = require('https');

const start = Date.now();

function request(index) {
   https
       .request('https://www.google.com', res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(`${index}`, Date.now() - start);
        })
       })
       .end();
}

for(let i = 1; i <= 5; i++) {
    request(i);
}
