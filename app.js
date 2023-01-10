const express = require('express');
const mongoose = require('mongoose');

const router = require('./Router/index');
const cors = require('cors');
const port = 8989;
const hostname = 'localhost';
const serverDB = 'mongodb+srv://Sanjay27:baUK39RDxcM50yMH@cluster0.z2q9c.mongodb.net/4546?retryWrites=true&w=majority';
const app = express();
app.use(cors());
app.use(express.json());  // parse json object 
app.use('/', router);

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        });
    })
    .catch(err => console.log(err));

