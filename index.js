const express = require('express');
const { resolve } = require('path');


require('dotenv').config();
const connectDb =  require('./datab');


const app = express();
const port = 3013

app.use(express.static('static'));


connectDb()

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
