'use strict';

const express = require('express');
const helmet = require('helmet');

// Constants
// const PORT = 5000;
// const HOST = '0.0.0.0';

// App
const app = express();
app.use(helmet());
app.get('/eli5.wiki/', (req, res) => {
  res.send('Hello World');
});

app.listen();
// console.log(`Running on http://${HOST}:${PORT}`);