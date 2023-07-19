var sqlite3=require('sqlite3').verbose()

const DBSOURCE="db.sqlite"

let db=new sqlite3.Database(DBSOURCE,(err)=>{
    if(err){
        console.log(err.message)
        throw err;
    }else{
        console.log('Connected to the SQLite Database')
        db.run(
            `CREATE TABLE customer(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name text,
                address text,
                email text,
                dateOfBirth text,
                gender text,
                age text,
                cardHolderName text,
                cardNumber INTEGER,
                expiryDate text,
                cvv INTEGER,
                timeStamp text
            )`,(err)=>{
                if(err){
                    //table already created
                }else{
                    //table created,creating some rows
                    var insert='INSERT INTO customer(name,address,email,dateOfBirth,gender,age,cardHolderName,cardNumber,expiryDate,cvv,timeStamp) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
                    db.run(insert,["A.D.Lakith Dharmasiri","No 324/A Ra De Mel Road,Colombo","lakith@gmail.com","1991.02.25","female",28,"A.D.L.Dharmasiri",102445217895,"12/2022",246,"2022-12-31 23:59:59"]);
                }
            }
        )
    }
})

module.exports=db;