const express = require('express');
const mysql = require('mysql')
const cors = require('cors'); //we need this for when client talks to server
var app = express()
const port = 3000

//middleware
// var morgan = require('morgan')
var parser = require('body-parser')
// app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());

// setting up database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tennis21',
  database: 'movies_db'
})

connection.connect()//function(err) {
//   if (err) {
//     console.log(err)
//   } else  {
//     console.log('sucess')
//   }
// })


// set up our routes
// routes direct the server to the controller which invoke a query to the database (in the model)
app.get('/api/movies',  (req,res) => {
  var queryString = 'SELECT * FROM movies'
  // var queryArg = [];
  connection.query(queryString, (err,results) => {
    if (err) {
      res.status(404)
      res.json(err)
    } else {
      res.status(200);
      res.json(results)
    }
  })
})

app.post('/api/movies', (req,res) => {
  var queryString = 'INSERT INTO movies (title, popularity, release_date) VALUE (?,?,?)';
  var queryArgs = [req.body.title, req.body.popularity, req.body.release_date];

  connection.query(queryString, queryArgs,(err) => {
    if(err) {
      res.status(404)
      res.send('SOMETHING WENT WRONG POSTING')
    } else {
      res.status(200)
      res.send('ADDED SUCCESSFULLY')
    }
  })
})

//initialize our server
app.listen(port,() => console.log('Listening on port 3000'))





