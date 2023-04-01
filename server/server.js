const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.json());
app.use(express.static('build'));
app.use('/img', express.static(path.join(__dirname, '../assets/dragontail-13.6.1/img/champion/')));

const champRouter = require('./routes/champ.router');
app.use('/champ', champRouter);

app.get('/test', (req, res) => {
    console.log('in test get!');
    res.send('Testing!');
})

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});