var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

mongo.connect(url, (err) => {
    console.log('Connected!')
})

app.get('/data/users', (req, res) => {
    mongo.connect(url, (err, db) => {
        var collection = db.collection('user');
        collection.find({}).toArray((x, data) => {
            res.send(data);
        })
    })
})
app.get('/data/mentors', (req, res) => {
    mongo.connect(url, (err, db) => {
        var collection = db.collection('mentor');
        collection.find({}).toArray((x, data) => {
            res.send(data);
        })
    })
})
app.post('/data/users', (req, res) => {
    mongo.connect(url, (err, db) => {
        var collection = db.collection('user');
        var user = {
            name: req.body.name,
            age: req.body.age
        }
        collection.insert(user, (x, data) => {
            res.send(data);
        })
    })
})
app.post('/data/mentors', (req, res) => {
    mongo.connect(url, (err, db) => {
        var collection = db.collection('mentor');
        var mentor = {
            name: req.body.name,
            age: req.body.age
        }
        collection.insert(mentor, (x, data) => {
            res.send(data);
        })
    })
})

app.listen(3210, () => {
    console.log('Server exist @port 3210!');
})