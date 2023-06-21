const fs=require("fs");

console.log("ABC");

//without promise
fs.readFile("./external.txt",(err,data)=>{
    console.log(data.toString());
});

console.log("ZXY");

//with promise

new Promise((resolve,reject)=>{
    fs.readFile("./external.txt",(err,data)=>{
        if(err){
            reject(err);
        }
        else{
            resolve(data);
        }
    })
})

.then(data=>{
    console.log(data.toString());
})

.catch(err=>{
    console.log(err);
})