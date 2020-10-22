
const server = require('./api/server')
const questionServer = require('./api/questionServer')
require('dotenv').config()

const PORT2 = process.env.PORT2 || 5900;
questionServer.listen(PORT2, () => {
    console.log(`\n=== Server listening on port ${PORT2} ===\n`)
});

const PORT = process.env.PORT || 5800;
server.listen(PORT, () => {
    console.log(`\n=== Server listening on port ${PORT} ===\n`)
});