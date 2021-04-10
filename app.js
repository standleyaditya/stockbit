const express = require('express');
const axios = require('axios');
const mysql = require('mysql');

// init express
const app = express();

// middleware / routing
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.raw());

// API
app.get('/search', (req,res) => {
    var config = {
        method: 'get',
        url: 'http://www.omdbapi.com/?apikey='+req.query.key+'&s='+req.query.keyword
      };      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.send({
            status: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
      data = {
        api_endpoint : 'search'
      }
      sql = 'INSERT INTO history SET ?';
        query = db.query(sql, data, (err, result) => {
            if(err) throw err;
            console.log("Inputed to history")
            data = {
                history_id : result.insertId,
                parameter_name : "key",
                field	: req.query.key
            }
            sql = 'INSERT INTO parameter SET ?';
                query = db.query(sql, data, (err, result) => {
                    if(err) throw err;
                    console.log("Inputed to parameter")
                }) 
            data = {
                history_id : result.insertId,
                parameter_name : "s",
                field	: req.query.keyword
            }
            sql = 'INSERT INTO parameter SET ?';
                query = db.query(sql, data, (err, result) => {
                    if(err) throw err;
                    console.log("Inputed to parameter")
                }) 
        })
        
})

app.get('/detail', (req,res) => {
    var config = {
        method: 'get',
        url: 'http://www.omdbapi.com/?apikey='+req.query.key+'&t='+req.query.title
      };      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));        
        res.send({
            status: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
      data = {
        api_endpoint : 'detail'
      }
      sql = 'INSERT INTO history SET ?';
        query = db.query(sql, data, (err, result) => {
            if(err) throw err;
            console.log("Inputed to history")
            data = {
                history_id : result.insertId,
                parameter_name : "key",
                field	: req.query.key
            }
            sql = 'INSERT INTO parameter SET ?';
                query = db.query(sql, data, (err, result) => {
                    if(err) throw err;
                    console.log("Inputed to parameter")
                }) 
            data = {
                history_id : result.insertId,
                parameter_name : "t",
                field	: req.query.title
            }
            sql = 'INSERT INTO parameter SET ?';
                query = db.query(sql, data, (err, result) => {
                    if(err) throw err;
                    console.log("Inputed to parameter")
                }) 
        })
        
})

//Database Connect
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'stockbit'
});
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Database Connected...');
});



// listen server
app.listen(3000, () => {
    console.log('Server Running on Port 3000')
})