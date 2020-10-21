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
router.get('/trending', (req, res) => {
    Questions.trending()
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




router.post('/', (req, res) => {
    const addNew = req.body;
    axios.post('https://infinite-sierra-21028.herokuapp.com/predict', addNew)
        .then(resData => {
            console.log(resData.data)
            console.log(addNew)
            addNew.prediction = resData.data.prediction
            Questions.insert(addNew)
            .then(resDatabase => {
                res.status(201).json(resDatabase)
            }).catch(err => {
                    console.log(err)
                    res.status(500).json({ err: err.message })


                
            })
        }).catch(err => {
            res.status(500).json({ err: err.message })
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


module.exports = router;