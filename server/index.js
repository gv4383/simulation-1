/****** Local Server ******/

require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');

// sets app as local server
const app = express();

// connects local server to database
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
}).catch(err => console.log(err));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening @ port: ${ port }`));