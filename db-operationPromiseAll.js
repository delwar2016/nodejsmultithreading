const mongoose = require('mongoose');
//process.env.UV_THREADPOOL_SIZE=1
const crypto = require('crypto');

mongoose.connect('mongodb://localhost:27018/dbTest', async () => {
    const start = Date.now();

    function hash(index) {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            console.log(`hash ${index} : ${Date.now() - start}`);
        })
    }

    function getUserAggregate(index) {
        return new Promise(function (resolve, reject) {
            mongoose.connection.db.collection('users').aggregate([{
                $group: {
                    _id: "$name", count: { "$sum": 1}
                }
            }], function (ee,ss) {
                console.log(`DB ${index} : ${Date.now() - start}`);
                resolve();
            })
        });


    }
    function getUser(index) {
        return new Promise(function (resolve, reject) {
            mongoose.connection.db.collection('users').find({name: 'Zachary Lane'}, function (ee,ss) {
                console.log(`DB ${index} : ${Date.now() - start}`);
                resolve();
            })
        });


    }
    const promiseArray = [];
    for(let i = 1; i <= 4; i++) {
        promiseArray.push(getUserAggregate(i))
    }



    Promise.all(promiseArray)

    hash(1)
    hash(2)
    hash(3)
    hash(4)

    console.log('-----------')

    // for(let i = 1; i <= 5; i++) {
    //      getUser(i)
    // }
})
