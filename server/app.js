const express = require('express');
const mysql = require('mysql');
var app = express()
const port = 4000

//middleware
// // var morgan = require('morgan')
// var parser = require('body-parser')
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('dist'))


// setting up database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies_db'
})

connection.connect()


// set up our routes
// routes direct the server to the controller which invoke a query to the database (in the model)
app.get('/api/movies',  (req,res) => {
  var queryString = 'SELECT * FROM movies'
  connection.query(queryString, (err,results) => {
    if (err) {
      console.log('error getting movies from database')
      res.status(404)
      res.send(err)
    } else {
      console.log('successful fetching from db')
      res.status(200);
      res.send(results)
    }
  })
});

app.post('/api/movies', (req,res) => {
  var queryString = 'INSERT INTO movies (title) VALUE (?)';

  connection.query(queryString, req.body.title, (err) => {
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
app.listen(port,() => console.log(`Listening on port ${port}`))





