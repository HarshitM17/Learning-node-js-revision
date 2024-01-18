// This section explains that how the async does not wait for second 
// one to execute it will execute third and then will come to second
// console.log('First')
// // setTimeout(() => {
// //     console.log('Second')
// // }, 2000);
// console.log('Third')


// Below is the example of drawback of asyn language

// let a = 10
// let b = 0

// setTimeout(()=>{
//     b=20
// },2000)

// console.log(a+b)

let a = 20
let b = 0

let waitingData = new Promise ((resolve,reject)=>{
    resolve(30)
})
waitingData.then((data)=>{
    b=data
    console.log(a+b)
})