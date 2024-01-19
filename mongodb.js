const {MongoClient}=require('mongodb');
const url = 'mongodb://localhost:27017';
const databasename = 'DbLearning';
const client = new MongoClient(url);

async function dbconnect(){
    let result = await client.connect();
    db = result.db(databasename);
    return db.collection('learn');

}
module.exports = dbconnect;