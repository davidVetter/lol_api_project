const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);
app.use(express.json());
app.use(express.static('build'));

const champRouter = require('./routes/champ.router');
app.use('/champ', champRouter);

app.get('/test', (req, res) => {
    console.log('in test get!');
    res.send('Testing!');
})

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});