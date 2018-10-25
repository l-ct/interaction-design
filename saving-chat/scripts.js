// setting up the websocket...
const socket = io('https://api.interaction.gd/louis').connect();

// I've decided to make an AJAX call using jQuery
// to retrieve my data from the database.
// Alternatively you can use socket.emit('find', callback);
$.getJSON('https://api.interaction.gd/get/louis', data => {
	// The server will respond with an array of all the data
	// stored in the database.
	// I'm using a for loop to cycle through each item of the array
	// in order to add it to the history.
	for(let i=0; i<data.length; i++){
		if(data[i].app == 'saving-chat')
			addToHistory(data[i].text);
			// In this example the data happens to be retrieved in
			// the order in which it was saved.
			// That won't always be the case, forcing us to add
			// code that will order the array the way we want it.
	}
});

// Just as in our previous chat example,
// I have an event listener bound to the input element
let input = document.getElementById('input');
input.addEventListener('keyup', event => {
	// when the key that was pressed happens to be a return
	// then ...
	if(event.keyCode == 13){
		// create an object that I'll be sending to the server
		let objectToBeSaved = {
			// I'm adding an 'app' key and value so that I
			// don't confuse this piece of data with
			// others that I will be also saving to the
			// database later on.
			app: 'saving-chat',
			text: input.value
		}
		// instead of 'broadcast' i'm using the 'insert'
		// namespace which will indicate to the server
		// that what is being sent should be saved to the
		// database
		socket.emit('insert', objectToBeSaved);
		addToHistory(input.value);
		// as before, setting the <input> element's value
		// to an empty string will delete any text that
		// was just written ... after pressing the enter key
		input.value = '';
	}
});

// the 'insert' namespace works similarly to 'broadcast'
// in that it will also broadcast what was just saved
// by one user to all the other connected users.
socket.on('insert', data => {
	// once more I'm checking that I'm only adding information
	// relevant to this app.
	if(data.app == 'saving-chat')
		addToHistory(data.text);
});

// this function has been used three times in the code above.
function addToHistory(text){
	let history = document.getElementById('history');
	history.innerHTML = '<p>' + text + '</p>' + history.innerHTML;
}