const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const db = require('../data/dbConfig');
const askedQuestionsRouter = require('./askedQuestions/askedQuestions-router')



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    db('submissions').select('*')
      
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.send(err));
})

server.use('/asked', askedQuestionsRouter);




module.exports = server;