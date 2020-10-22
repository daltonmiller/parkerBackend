const router = require('express').Router();
const db = require("../../data/dbConfig")
const Questions = require('./questions-model')
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







router.put('/:id', (req, res) => {
    Questions.edit(req.params.id, req.body)
        .then(count => {
            if(count){
                res.status(200).json({ message: 'update successful', data: req.body })
            } else {
                res.status(404).json({ message: ' Id not found.'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error:error.message })
        })
})

router.delete('/:id', (req, res) => {
    Questions.remove(req.params.id)
        .then(deleted => {
            res.status(200).json({ message: 'delete success' })
        })
        .catch(err => {
            res.status(500).json({ message: `unable to delete item - ${err}` })
          })
})
router.put('/:id', (req, res) => {
    console.log(req)
    Questions.edit(req.params.id, req.body)
        .then(count => {
            if(count){
                res.status(200).json({ message: 'update successful', data: req.body })
            } else {
                res.status(404).json({ message: ' Id not found.'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error:error.message })
        })
})


router.post("/", (req, res) => {
    const propertyData = req.body
    // const id = req.body.id
    console.log(req.data)
    db("questions")
    .insert(propertyData)
    .returning("id")
    .then(ids => {
        res.status(200).json({data: ids})
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})


module.exports = router;