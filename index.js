const dbconnect = require("./mongodb");

dbconnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.warn(data)
    })
})