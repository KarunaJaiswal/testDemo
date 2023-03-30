const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/user_routes');

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
var corsOption = {
    origin: '*',
    methods: [
        'GET','HEAD','PUT','PATCH','POST','DELETE'
    ]
};
app.use(cors(corsOption));

app.get("/", (req, res)=>{
    res.send("connected")
})
  
app.use('/', routes)

module.exports = app;