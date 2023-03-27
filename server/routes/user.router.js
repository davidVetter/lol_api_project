const router = require('express').Router();

router.get('/user', (req, res) => {
    console.log('In router GET /user');
    res.sendStatus(201);
})