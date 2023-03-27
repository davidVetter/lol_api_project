const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('build'));

const userRouter = require('./routes/user.router');
app.use('/user', userRouter);

app.get('/test', (req, res) => {
    console.log('in test get!');
    res.send('Testing!');
})

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});