const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const db = require('../data/dbConfig');
const questionRouter = require('./questions/questions-router')
const askedQuestionsRouter = require('./askedQuestions/askedQuestions-router')



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/questions', (req, res) => {
    db('questions').select('*')
      
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.send(err));
})

server.use('/', questionRouter);




module.exports = server;