const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');

app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.use('*', (req, res) => res.send('Page not found'));

app.listen(PORT);