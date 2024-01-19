const dbconnect = require("./mongodb");

// //insert data
// const insert = async () =>{
//     const db = await dbconnect();
//     const insert_data = await db.insertOne({
//             "name": "Smita Mathur",
//             "age": 48,
//             "email": "mathurharshit88@gmail.com"
//           });
//     if (insert_data.acknowledged) console.log('Insert Function');
    
// }
// insert();



// //Update data
// const update = async() =>{
//     let db = await dbconnect();
//     let update_data = await db.updateOne(
//         {name:"Jane Foster"},
//         {$set:{name:"Jane Fosterr",age:26}}
//     ); 
//     if (update_data.acknowledged) console.log("Data Updated");
//     console.warn(update_data);
// };

// update();


const remove = async() =>{
    let db = await dbconnect();
    let delete_data = await db.deleteOne(
        {name:"John Doe"}
    );
    if (delete_data.acknowledged) console.log("data deleted");
    console.log(delete_data);
};

remove();