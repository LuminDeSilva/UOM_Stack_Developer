const fs=require("fs");
const util=require("util");

var read=util.promisify(fs.readFile);
Promise.all([
    read('./external.txt'),
    read('./external1.txt')
])

.then(data=>{
    const[data1,data2]=data;

    console.log(data1.toString());
    console.log(data2.toString());
})

.catch(err=>{
    console.log(err);
})