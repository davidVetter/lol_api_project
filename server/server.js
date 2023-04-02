const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.json());
app.use(express.static('build'));
app.use('/img', express.static(path.join(__dirname, '../assets/dragontail-13.6.1/img/champion/')));
app.use('/spell', express.static(path.join(__dirname, '../assets/dragontail-13.6.1/13.6.1/img/spell/')));

const champRouter = require('./routes/champ.router');
app.use('/champ', champRouter);

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});