const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a', 'b', 225000, 512, 'sha512', function () {
    console.log('1:', Date.now() - start);
})
