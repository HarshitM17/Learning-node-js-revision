const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const database='DbLearning';
const client = new MongoClient(url);

async function getData(){

    let result = await client.connect();
    let db = result.db(database)
    let collection = db.collection('learn')
    let response = await collection.find({"name":"Bob Smith"}).toArray()
    console.log(response);

}

getData()


// const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017'; // Corrected URL

// const database = 'DbLearning';
// const client = new MongoClient(url);

// async function getData() {
//     try {
//         await client.connect();
//         console.log('Connected to the database');

//         const db = client.db(database);
//         const collection = db.collection('learn');
//         const response = await collection.find({}).toArray();
//         const json = JSON.stringify(response)
//         console.log(json);

//         // }
//     } finally {
//         await client.close();
//         console.log('Connection closed');
//     }
// }

// getData();
