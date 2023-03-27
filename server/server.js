const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const userRouter = require('./routes/user.router');
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});