const socket = io('http://localhost:8000');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const MessageContainer = document.querySelector('.container');
var audio = new Audio('ding-sound-effect_2.mp3');

const append = (message, position) => {
	const messageElement = document.createElement('div');
	messageElement.innerText = message;
	messageElement.classList.add('message');
	messageElement.classList.add(position);
	MessageContainer.append(messageElement);
	if (position == 'left') {
		audio.play();
	}
};

// Add room name to DOM
function outputRoomName(room) {
	roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
	userList.innerHTML = '';
	users.forEach(user => {
		const li = document.createElement('li');
		li.innerText = user.username;
		userList.appendChild(li);
	});
}

form.addEventListener('submit', e => {
	e.preventDefault();
	const message = messageInput.value;
	append('You: ' + message, 'right');
	socket.emit('send', message);
	messageInput.value = '';
});

const { username, room } = Qs.parse(location.search, {
	ignoreQueryPrefix: true
});
socket.emit('new-user-joined', { username, room });

socket.on('roomUsers', ({ room, users }) => {
	outputRoomName(room);
	outputUsers(users);
});

socket.on('user-joined', username => {
	append(username + ' joined the chat', 'right');
});

socket.on('receive', data => {
	append(data.username + ': ' + data.message, 'left');
});

socket.on('left', username => {
	append(username + ' left the chat', 'right');
});
