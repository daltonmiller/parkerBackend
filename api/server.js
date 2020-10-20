const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const db = require('../data/dbConfig');
const questionRouter = require('./questions/questions-router')
const voteRouter = require('./votes/votes-router')


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    db('questions').select('*')
      
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.send(err));
})


server.use('/questions', questionRouter);
server.use('/votes', voteRouter);



module.exports = server;