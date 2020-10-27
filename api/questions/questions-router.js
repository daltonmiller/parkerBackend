const router = require('express').Router();
const db = require("../../data/dbConfig")
const Questions = require('./questions-model')
const axios = require('axios')


router.get('/questions/', (req, res) => {
    Questions.find()
        .then(Questions => {
            res.status(200).json(Questions);
        })
        .catch(err => {
            res.status(500).json({ message: `failed to get Questions - ${err}` })
        })
})



// router.put('/questions/upvote/:id', (req, res) => {
//     const thisQuestion = Questions.findById(req.params.id)
//     .then(x => {
//         x.votes++
//         return x
//     })
//     console.log(thisQuestion)
//     Questions.edit(req.params.id, thisQuestion)
//         .then(q => {
//             console.log(q)
//             res.status(200).json(q);

//         }).catch(err => {
//             res.status(500).json({ message: `unable to get Questions - ${err}` })
//         })
        
      
// })





router.put('/questions/:id', (req, res) => {
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

router.delete('/questions/:id', (req, res) => {
    Questions.remove(req.params.id)
        .then(deleted => {
            res.status(200).json({ message: 'delete success' })
        })
        .catch(err => {
            res.status(500).json({ message: `unable to delete item - ${err}` })
          })
})
router.put('/questions/:id', (req, res) => {
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
// router.put('/questions/upvote/:id', (req, res) => {
//     console.log(req.body)
//     req.body.votes++
//     Questions.edit(req.params.id, req.body)
//         .then(count => {
//             if(count){
//                 res.status(200).json({ message: 'update successful', data: req.body })
//             } else {
//                 res.status(404).json({ message: ' Id not found.'})
//             }
//         })
//         .catch(error => {
//             console.log(error)
//             res.status(500).json({ error:error.message })
//         })
// })






module.exports = router;