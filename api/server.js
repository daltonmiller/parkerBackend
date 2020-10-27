const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const db = require('../data/dbConfig');
const questionRouter = require('./questions/questions-router')
const askedQuestionRouter = require('./askedQuestions/askedQuestions-router')
const dbConnection = require("../data/dbConfig.js");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);


const server = express();

const sessionConfiguration = {
    name: "testsession", // default value is sid
    secret: process.env.SESSION_SECRET || "the password is password", // key for encryption
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: process.env.USE_SECURE_COOKIES || false, // send the cookie only over https (secure connections)
        httpOnly: true, // prevent JS code on client from accessing this cookie
    },
    resave: false,
    saveUninitialized: true, // read docs, it's related to GDPR compliance
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 1000 * 60 * 30, // time to check and remove expired sessions from database
    }),
};
server.use(session(sessionConfiguration));
server.use(helmet());
server.use(cors());
server.use(express.json());




server.get('/questions', (req, res) => {
    db('questions').select('*').orderBy('votes', 'desc')
      
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.send(err));
})

server.get('/asked', (req, res) => {
    db('submissions').select('*')
      
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.send(err));
})



server.use('/', questionRouter, askedQuestionRouter);




module.exports = server;