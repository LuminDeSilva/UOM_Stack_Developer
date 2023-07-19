var express=require("express")
var app=express()
var db = require("./database.js")
var bodyParser = require("body-parser")
const { requset, response } = require("express");
const res = require("express/lib/response")

app.use(bodyParser.json());

let HTTP_PORT = 8080;

app.listen(HTTP_PORT, () => {
    console.log("Server is running on %PORT%".replace("%PORT%", HTTP_PORT))
});

app.post("/api/customer", (req, res, next) => {
    try {
        var errors = [];
        if (!req.body) {
            errors.push("An invalid input");
        }

        const {
            name,
            address,
            email,
            dateOfBirth,
            gender,
            age,
            cardHolderName,
            cardNumber,
            expiryDate,
            cvv,
            timeStamp
        } = req.body;

        var sql = 'INSERT INTO customer(name,address,email,dateOfBirth,gender,age,cardHolderName,cardNumber,expiryDate,cvv,timeStamp) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
        var params = [name,address,email,dateOfBirth,gender,age,cardHolderName,cardNumber,expiryDate,cvv,timeStamp]

        db.run(sql, params, function (err, results) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            } else {
                function validateEmail(email) {
                    const pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
                    return pattern.test(email);
                  }
                
                function validateCreditCard(cardNumber) {
                    const pattern = /^\d{12}$/;
                    return pattern.test(cardNumber);
                  }
                if(!validateCreditCard(this.cardNumber)|| !validateEmail(this.email))
                {
                    res.status(201).json({
                        "message": "success",
                        "customerId": this.lastID
                    })
                }
            }

        })

    } catch (E) {
        res.status(400).send(E);
    }
});

app.get("/ap", (req, res, next) => {
    try {
        var sql = "select * from customer"
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            } else {
                res.json({
                    "message": "success",
                    "data": rows
                })
            }
        })
    } catch (E) {
        res.status(400).send(E);
    }
});
