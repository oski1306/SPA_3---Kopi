const express = require('express');
const server = express();
const path = require('path');
const port = process.env.PORT || 8080;

server.use('/script', express.static(path.resolve(__dirname,'public', 'script')));

server.get('/*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'public','index.html'));
});

console.log('Server running in port:' + port);
