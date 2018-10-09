let socket = io();
socket.on('connect', function() {
    console.log('Connected to the server');

    socket.emit('createMessage', {
        from: 'user2@email.com',
        text: 'This is user 2 from the client side'
    })
});

socket.on('disconnect', function() {
    console.log('Disconnected from the server');
});

socket.on('newMessage', function(message) {
    console.log('Got a new message:');
    console.log(message);
});