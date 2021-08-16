'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');
const cors=require('cors');
// const favicon=require('serve-favicon');
// const path = require('path')

// server config
const port = process.env.PORT || 3000;



app.use(cors());
// register routes
registerRoutes(app);

//setup index.html
app.use(express.static('public'))

//setup fav.icon
// app.use('/favicon.png', express.static('public/favicon.png'));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


