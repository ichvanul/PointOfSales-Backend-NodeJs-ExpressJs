require('dotenv').config();
const express = require ('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const route = require('./src/routers/index.js');
const logger = require('morgan');
const cors = require('cors');

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/uploads', express.static('./uploads'));
app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1/', route);
app.listen(port, ()=>{
  console.log('App Listen post 8000');
})