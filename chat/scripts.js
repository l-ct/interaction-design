const socket = io('https://api.interaction.gd/louis').connect();

socket.on('broadcast', data => {
	addToHistory(data);
});

function sendToServer(event){
	let input = document.getElementById('input');
	if(event.keyCode == 13) {
		socket.emit('broadcast', input.value);
		addToHistory(input.value);
		input.value = '';
	}
}

function addToHistory(text){
	let history = document.getElementById('history');
	text = '<p>' + text + '</p>';
	history.innerHTML = text + history.innerHTML;
}
