const express = require('express');
const firebase = require('firebase');
const bparser = require('body-parser');
const log = console.log;
const router = require('./router.js');

// firebase app
firebase.initializeApp({
    apiKey: "AIzaSyAbNCSDjIShOndkTWLZuaCzVJF9dYoBGV0",
    authDomain: "star-wars-express.firebaseapp.com",
    databaseURL: "https://star-wars-express.firebaseio.com",
    projectId: "star-wars-express",
    storageBucket: "star-wars-express.appspot.com",
    messagingSenderId: "112636333649"
});

const fire = firebase.database();

// express server
let app = express();

// middleware start
// parse application/x-www-form-urlencoded
app.use( bparser.urlencoded({ extended: false }) );
// parse application/json
app.use( bparser.json() );
app.use( express.static('vendor') );

app.get( '/', (req, res) => {
    router.getRoute(res, req);
});
app.get( '/tables', (req, res) => {
    router.getRoute(res, req);
});
app.get( '/reservation', (req, res) => {
    router.getRoute(res, req);
});


app.listen( 1985, () => { log(`we have liftoff commander`) });