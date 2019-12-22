const express = require('express');
const handler = require('./handler');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('express_app/server/db/userCart.json', 'utf8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});

router.post(`/`, (req, res) => {
    handler(req, res, 'add', `express_app/server/db/userCart.json`);
});

router.put(`/:id`, (req, res) => {
    handler(req, res, 'change', `express_app/server/db/userCart.json`);
});

router.delete(`/:id`, (req, res) => {
    handler(req, res, 'remove', `express_app/server/db/userCart.json`);
});

module.exports = router;

