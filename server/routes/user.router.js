const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    console.log('In router GET /user');
    res.send('Hello Posty');
})

module.exports = router;