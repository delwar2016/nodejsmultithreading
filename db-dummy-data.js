var mgenerate = require('mgeneratejs');
var template = { "name": "$name", "age": "$age", "emails": "$email" };
//console.log(mgenerate(template))
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/dbTest', async () => {
    const total = 50000;
    for (let i = 1; i <= total; i++) {
        await mongoose.connection.db.collection('users').insert(mgenerate(template))
    }
    console.log('done')
    process.exit(0);
})
