const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const mongoose= require('mongoose');
const app = express();

app.use(bodyParser.json()); 

mongoose.connect("mongodb+srv://BishuPanda:KEzGyGmSt4rBna87@cluster0.qkauz0y.mongodb.net/group18Database?retryWrites=true&w=majority")
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});