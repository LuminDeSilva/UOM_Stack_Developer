const promise=new Promise((resolve,reject)=>{
    resolve('Success');
    //reject('Failure');
})

    .then(value=>{
        //throw "Error Occured";
        console.log(value);
        return "one";
    })
    .then(value=>{
        console.log(value);
        return "two";
    })

    .catch(error=>{
        console.log(error);
    })