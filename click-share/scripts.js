
const socket = io('https://api.interaction.gd/ryan').connect();

socket.on('broadcast', data => {
	addToPage(data.x, data.y);
});

window.addEventListener('click', event => {
	// I'm dividing the position of the last click
	// by the size of the window to get
	// a relative position from 0 to 1
	// which is then sent to the other users
	// and also added to this user
	let x = event.clientX / window.innerWidth;
	let y = event.clientY / window.innerHeight;
	socket.emit('broadcast', {
		x:x,
		y:y
	});
	addToPage(x, y);
});

function addToPage(x, y){
	x = x * window.innerWidth;
	y = y * window.innerHeight;
	let drawing = document.getElementById('drawing');
	let style = "style='top:" + y + "px;left:" + x + "px'"
	drawing.innerHTML = "<div " + style + "class='square'></div>" + drawing.innerHTML;
}