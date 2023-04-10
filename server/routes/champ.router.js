const { readFile }= require('node:fs/promises');
const { resolve } = require('node:path');
const express = require('express');
const router = express.Router();
const capitalizeFirstLetter = require('../../modules/utilities/capitalizeFirstLetter');
let contents = {};
let champ = 'Aatrox';

// assigns 'contents' the value of the user selected champion
async function getChampJsonFile() {
    try {
        const filePath = resolve(`assets/dragontail-13.6.1/13.6.1/data/en_US/champion/${champ}.json`);
        contents = await readFile(filePath, {encoding: 'utf8'});
    } catch (err) {
        console.log('This is the error: ', err.message);
    }
}

async function getChampList() {
    try {
        const filePath = resolve(`assets/dragontail-13.6.1/13.6.1/data/en_US/championFull.json`);
        const fullChampJsonFile = await readFile(filePath, {encoding: 'utf8'});
        return Object.entries(JSON.parse(fullChampJsonFile).keys).sort((a, b) => {
            if (a[1] < b[1]) {
              return -1;
            }
            if (a[1] > b[1]) {
              return 1;
            }
            // a must be equal to b
            return 0;
          })
    } catch (err) {
        console.log('This is the error: ', err.message);
    }
}

// GET that returns a list of all current champions
router.get('/champlist', async (req, res) => {
    res.send(await getChampList());
})

// GET that returns the passed champions full details
router.get('/:champ', async (req, res) => {
    champ = capitalizeFirstLetter(req.params.champ);
    await getChampJsonFile();
    res.send(JSON.parse(contents));
})


module.exports = router;