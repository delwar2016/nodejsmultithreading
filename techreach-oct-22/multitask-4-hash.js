const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const start = Date.now();

function doRequest() {
   https
       .request('https://www.google.com', res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(`Request `, Date.now() - start);
        })
       })
       .end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 225000, 512, 'sha512', function () {
        console.log(`Hash `, Date.now() - start);
    })
}

function doFS() {
    fs.readFile('multitask-4-hash.js', 'utf-8', () => {
        console.log(`FS `, Date.now() - start);
    })
}

doRequest();

doFS();

doHash();
doHash();
doHash();
doHash();
