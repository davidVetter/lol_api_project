const { readFile }= require('node:fs/promises');
const { resolve } = require('node:path');
const express = require('express');
const router = express.Router();
let contents = {};
let champ = 'Aatrox';

// assigns 'contents' the value of Taric.json
async function getChamp() {
    try {
        const filePath = resolve(`../../codePlayground/lol_api_project/assets/dragontail-13.6.1/13.6.1/data/en_US/champion/${champ}.json`);
        contents = await readFile(filePath, {encoding: 'utf8'});
    } catch (err) {
        console.log('This is the error: ', err.message);
    }
}

// GET that returns the Taric champions full details
router.get('/:champ', async (req, res) => {
    champ = req.params.champ;
    await getChamp();
    res.send(contents);
})

module.exports = router;