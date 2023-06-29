var sqlite3=require('sqlite3').verbose()

const DBSOURCE="db.sqlite"

let db=new sqlite3.Database(DBSOURCE,(err)=>{
    if(err){
        console.log(err.message)
        throw err
    }else{
        console.log('Connected to the SQLite Database')
        db.run(
            `CREATE TABLE products(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                productName text,
                description text,
                category text,
                brand text,
                expireDate text,
                manufacturedDate text,
                batchNumber INTEGER,
                unitPrice INTEGER,
                quantity INTEGER,
                createdDate text
            )`,(err)=>{
                if(err){
                    //table already created
                }else{
                    //table created,creating some rows
                    var insert='INSERT INTO products(productName,description,category,brand,expireDate,manufacturedDate,batchNumber,unitPrice,quantity,createdDate) VALUES (?,?,?,?,?,?,?,?,?,?)'
                    db.run(insert,["test","test","test","test","test","test",12,12,12,"test"]);
                }
            }
        )
    }
})

module.exports=db;