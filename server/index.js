/****** Local Server ******/

require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');

const controller = require('./controllers/controller');

// sets app as local server
const app = express();
app.use(json());

// connects local server to database
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
}).catch(err => console.log(err));

// test endpoint
app.get('/api/test', controller.test);

app.get('/api/inventory', controller.getInventory);
app.post('/api/inventory', controller.addProduct);
app.delete('/api/inventory/:id', controller.deleteProduct);

// sets up local server on port 3001
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening @ port: ${ port }`));