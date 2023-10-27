const express = require('express');
const http = require('http');
const socketIo = require('socket.io');


// function startServer (){
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A client has connected.');

    socket.on('data', (data) => {
        console.log('Data received from client:', data);
        
        // Handle data as needed
        socket.broadcast.emit('data', 'Server received your data: ' + data);
        // console.log(data);
    });
});

// io.on('error', (error) => {
//   console.error('Socket.io Server Error:', error);
// });

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
// }

// module.exports = startServer;