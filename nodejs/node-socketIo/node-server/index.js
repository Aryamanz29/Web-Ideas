//Node Server
const io = require('socket.io')(8000);
const users = {};

function userJoin(id, username, room) {
	const user = { id, username, room };
	users.push(user);
	return user;
}

function getRoomUsers(room) {
	return users.filter(user => user.room === room);
}

io.on('connection', socket => {
	socket.on('new-user-joined', ({ username, room }) => {
		console.log(`New User: ${username}. Room: ${room}`);
		const user = userJoin(socket.id, username, room);
		socket.join(user.room);
		socket.broadcast.to(user.room).emit('user-joined', username);
		io.to(user.room).emit('roomUsers', {
			room: user.room,
			users: getRoomUsers(user.room)
		});
	});

	socket.on('send', message => {
		socket.broadcast.emit('receive', {
			message: message,
			name: users[socket.id]
		});
	});

	socket.on('disconnect', message => {
		socket.broadcast.emit('left', users[socket.id]);
		delete users[socket.id];
	});
});
