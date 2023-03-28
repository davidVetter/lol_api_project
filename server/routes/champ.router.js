const { readFile }= require('node:fs/promises');
const { resolve } = require('node:path');
const express = require('express');
const router = express.Router();
let contents = {}
async function getTaric() {
    try {
        const filePath = resolve('../../codePlayground/lol_api_project/assets/dragontail-13.6.1/13.6.1/data/en_US/champion/Taric.json');
        contents = await readFile(filePath, {encoding: 'utf8'});
        console.log('this is contents: ', contents);
    } catch (err) {
        console.log('This is the error: ', err.message);
    }
}
// let taric = require(`../../assets/dragontail-13.6.1/13.6.1/data/en_US/champion/Taric.json`);
// fs.readFile(`../../assets/dragontail-13.6.1/13.6.1/data/en_US/champion/Taric.json`, 'utf-8', (err, data) => {
//     if (err) throw err

//     taric = JSON.parse(data);
// });


router.get('/', async (req, res) => {
    console.log('In router GET /user');
    await getTaric();
    res.send(contents);
})

module.exports = router;