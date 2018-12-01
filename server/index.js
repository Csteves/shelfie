const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
const prodCon = require('./controller')
app.use( bodyParser.json());
require('dotenv').config();

app.use(express.static(__dirname+"/../build"))
massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db',dbInstance)
}).catch(err => console.log(err));

app.get('/api/products', prodCon.getAll )
app.put('/api/products/:id', prodCon.update )
app.post('/api/products', prodCon.create )
app.delete('/api/products/:id', prodCon.delete )


const port = process.env.PORT || 4000;
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );