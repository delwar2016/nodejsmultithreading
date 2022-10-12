const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE = 5;

const start = Date.now();

function hash(index) {
    crypto.pbkdf2('a', 'b', 225000, 512, 'sha512', function () {
        console.log(`${index}:`, Date.now() - start);
    })
}

for(let i = 1; i <= 5; i++) {
    hash(i);
}
