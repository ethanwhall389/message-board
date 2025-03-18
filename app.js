const express = require('express');
const path = require('path');

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const messageRouter = require('./routes/messageRouter');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// Middleware to handle non-existent static files
app.use((req, res, next) => {
    if (req.url.endsWith('.map')) {
        res.status(204).send(); // No Content
    } else {
        next();
    }
});

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.use('/message', messageRouter);
app.use('*', (req, res) => res.send('Page not found'));

app.listen(PORT);