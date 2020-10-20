const router = require('express').Router();
const db = require("../../data/dbConfig")
const Questions = require('./votes-model')
const axios = require('axios')


router.get('/', (req, res) => {
    Questions.find()
        .then(Questions => {
            res.status(200).json(Questions);
        })
        .catch(err => {
            res.status(500).json({ message: `failed to get Questions - ${err}` })
        })
})


router.get('/:id', (req, res) => {
    Questions.findById(req.params.id)
        .then(Questions => {
            res.status(200).json(Questions);
        })
        .catch(err => {
            res.status(500).json({ message: `unable to get Questions - ${err}` })
        })
})

module.exports = router;