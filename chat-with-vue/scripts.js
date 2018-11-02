const socket = io('https://api.interaction.gd/louis').connect();

var vue = new Vue({
	el: '#vue',
	data: {
		// we need two pieces of data:
		input: '',
		history: []
	},
	methods: {
		// just one method (or function)
		shareWithOthers: function(){
			// this.input accesses the input field
			// in the data property.
			socket.emit('broadcast', this.input);
			// just change the array to update
			// and vue will automatically render
			// the new content
			this.history.unshift(this.input);
			// clears the input field
			this.input = '';
		}
	}
});

socket.on('broadcast', data => {
	// un-intuitively, the data and methods dissapear
	// when accessing the vue object.
	vue.history.unshift(data);
});

// check out the vue object
console.log(vue);