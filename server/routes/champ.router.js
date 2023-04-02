const { readFile }= require('node:fs/promises');
const { resolve } = require('node:path');
const express = require('express');
const router = express.Router();
const capitalizeFirstLetter = require('../../modules/utilities/capitalizeFirstLetter');
let contents = {};
let champ = 'Aatrox';

// assigns 'contents' the value of the user selected champion
async function getChamp() {
    try {
        const filePath = resolve(`assets/dragontail-13.6.1/13.6.1/data/en_US/champion/${champ}.json`);
        contents = await readFile(filePath, {encoding: 'utf8'});
    } catch (err) {
        console.log('This is the error: ', err.message);
    }
}

// GET that returns the passed champions full details
router.get('/:champ', async (req, res) => {
    console.log('This is req.params.champ: ', req.params.champ);
    champ = capitalizeFirstLetter(req.params.champ);
    await getChamp();
    res.send(JSON.parse(contents));
})

module.exports = router;