const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
var util = require('util');

var app = express();

app.use(morgan('short'));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use(express.static('./public'));


function createConnection() {
    var configurationOfDB = {
        host: 'localhost',
        port: 3308,
        user: 'root',
        password: '',
        database: 'store'
    };
    var con = mysql.createConnection(configurationOfDB);

    con.connect((err) => {
        if (!err) {
            console.log('MySQL is Connected Successfully ;)');
        } else {
            console.log('MySQL Connection Fails \n error : ' + JSON.stringify(err, undefined, 2));
        }
    })

    return con;
}


//url:http://localhost:3001/

//url:http://localhost:3001/allItems
// GET all Items
app.get('/allItems', (req, res) => {
    var connect = createConnection();
    var sqlquery = "Select * from itemtable";
    connect.query(sqlquery, (e, results) => {
        res.send(JSON.stringify(results))
            // res.send(results)
    })
});

//url:http://localhost:3001/allItems/asc
// GET all items in Ascending order
app.get('/allItems/asc', (req, res) => {
    var connect = createConnection();
    var sqlquery = "Select * from itemtable ORDER BY itemNo ASC";
    connect.query(sqlquery, (e, results) => {
        res.send(JSON.stringify(results))
    })
});

//url:http://localhost:3001/item/:id
// GET item by ItemNo
app.get('/item/:id', (req, res) => {
    var idi = req.params.id;
    var connect = createConnection();
    var sqlquery = "Select * from itemtable where itemNo = " + idi;
    connect.query(sqlquery, (e, results) => {
        res.send(JSON.stringify(results))
            // res.send(results);
    })
});

// url:http://localhost:3001/item/byprice/:rs
// GET item By Price
app.get('/item/byprice/:rs', (req, res) => {
    var rate = req.params.rs;
    var connect = createConnection();
    var sqlquery = "Select * from itemtable where itemPrice >" + rate;
    connect.query(sqlquery, (e, results) => {
        if (e) {
            console.log('Failed to Query for user \n error : ' + JSON.stringify(e, undefined, 2));
            res.sendStatus(500);
            res.end();
            return;
        } else if (rate >= 50) {
            console.log('Please Enter rate under or equal to Rs. 50');
            res.sendStatus(404);
            res.end();
            return;
        }
        res.send(JSON.stringify(results))
    })
})

// url:http://localhost:3001/additem
// POST new item into MySQL
app.post('/additem', (req, res) => {

    console.log(req.body);
    var data = req.body;
    console.log(data.itemNo);

    var insertquery = util.format("Insert into itemtable values('%s','%s','%s')", data.itemNo, data.itemName, data.itemPrice);
    console.log(insertquery)

    createConnection().query(insertquery, (e, results) => {
        if (e) {
            console.log('Failed to insert new Entry' + e);
            res.sendStatus(500); // Internal Server Error
            return;
        }
        console.log('Inserted a New Item with id: ', results.insertId);
        res.status(200).send({
            message: 'Data Received'
        });
        res.end();
    })
});

// url:http://localhost:3001/remove/:id
// DELETE item from Database
app.delete('/remove/:id', (req, res) => {
    var iditem = req.params.id;
    var sqlquery = "Delete from itemtable where itemNo =" + iditem;
    createConnection().query(sqlquery, (e, results) => {
        if (e) {
            console.log('Failed to Remove Item From Table' + e);
            res.sendStatus(500); // Internal Server Error
            return;
        }
        console.log('Deletion Successfull of Id ');
        res.send('Deleted From DataBase');
    })
})

// url:http://localhost:3001/update
// UPDATE Item from Database
app.put('/update', (req, res) => {
    var data = req.body;
    var connect = createConnection();
    var sqlquery = util.format("Update itemtable set itemName = '%s', itemPrice = '%s' where itemNo = '%s'", data.itemName, data.itemCost, data.itemId);
    connect.query(sqlquery, (e, result) => {
        if (e) res.send("Error Occured");
        res.send("Updation Successfull");
    })
});

app.listen(3001, () => {
    console.log('Server is Running at Port : 3001');
});