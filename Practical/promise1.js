//const { error } = require("console");

Promise.resolve("Test")
    .then(value=>{
        console.log(value);
        return "one";
    })
    .catch(error=>{
        console.log(error);
    })