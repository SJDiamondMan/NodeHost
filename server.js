const express = require('express')
const server = express()
const config = require('./config.json')

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + config.webdir + '/' + config.index)
});
server.listen(config.port, () => console.log('[Console] Starting Server on Port: ' + config.port));
console.log('[Console] Setting WebDir' + config.webdir)
console.log('[Console] Setting Index: ' + config.index)