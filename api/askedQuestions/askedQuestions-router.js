const router = require('express').Router();
const db = require("../../data/dbConfig")
const Questions = require('./askedQuestions-model')
const axios = require('axios')

router.get('/asked', (req, res) => {
    Questions.find()
        .then(Questions => {
            res.status(200).json(Questions);
        })
        .catch(err => {
            res.status(500).json({ message: `failed to get Questions - ${err}` })
        })
})

router.post("/asked", (req, res) => {
    const questionData = req.body
    // const id = req.body.id
    console.log(req.data)
    db("submissions")
    .insert(questionData)
    .returning("id")
    .then(ids => {
        res.status(200).json({data: ids})
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})
module.exports = router;