const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/attendance', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
/*mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });
})*/
const db = mongoose.connection

module.exports = db
