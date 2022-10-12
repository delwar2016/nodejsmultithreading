const mongoose = require('mongoose');
//process.env.UV_THREADPOOL_SIZE=2
const crypto = require('crypto');

mongoose.connect('mongodb://localhost:27018/dbTest', async () => {
    const start = Date.now();

    function hash(index) {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            console.log(`hash ${index} : ${Date.now() - start}`);
        })
    }
    function getUser(index) {
        mongoose.connection.db.collection('users').aggregate([{
            $group: {
                _id: "$name", count: { "$sum": 1}
            }
        }], function (ee,ss) {
            console.log(`DB ${index} : ${Date.now() - start}`);
        })


    }

    getUser(1);
    getUser(2);
    getUser(3);
    getUser(4);

    // hash(1)
    // hash(2)
    // hash(3)
    // hash(4)
    // hash(5)

    //getUser(5);
    // getUser(5);
    // getUser(6);
    // getUser(7);
    // getUser(8);
    // getUser(9);
    // getUser(10);
    // getUser(11);
})
