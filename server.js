const express = require('express')
const server = express()
const config = require('./config.json')
const path = require('path')
server.use(express.static(path.join(__dirname, ''.join(config.webdir)))
server.listen(config.port, () => {
    console.log('[Console] Starting Server on Port: ' + config.port)
    console.log('[Console] Setting WebDir: ' + config.webdir)
    console.log('[Console] Setting Index: ' + config.index)
});
