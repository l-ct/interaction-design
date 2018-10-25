// set up the canvas:
let canvas = document.getElementById('canvas');

// resize canvas to the page
// out of the box, the canvas element scales everything when 
// resizing in CSS
// so we resize in JS.
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// ctx is what we will later be using to add pixels to the canvas.
let ctx = canvas.getContext('2d');

// take a look at the available methods in the canvas
console.log(ctx);

// later you will see two Math functions (or methods) being used.
// Check out what other methods are available in Math
console.log(Math)

// A global variable that we're going to need later
let gesture;

// JS doesn't really have a mousedrag event listener,
// so we need to fire a function when mouse is moving
// but only after the mouse has been pressed and...
// before the mouse key has been lifted.
let dragging = false;
window.addEventListener('mousedown', event => {
	dragging = true;
	// notice the new keyword. We'll continue discussing
	// the different ways in which creating a constructor is useful
	gesture = new Gesture(event.clientX, event.clientY);
});
window.addEventListener('mouseup', event => {
	dragging = false;
});
window.addEventListener('mousemove', event => {
	if(dragging)
		gesture.drag(event.clientX, event.clientY);
});


// a constructor
function Gesture(x, y){
	// I'm storing the initial x, y coordinates so that I can
	// later know where the last mouse position was.
	this.x = x;
	this.y = y;

	// here I'm adding a random hue each time Gesture is created
	// Math.random() generates a random number from 0 to 1.
	// multiplying by 360 scales the random number from 0 to 360 
	// 0*0 = 0, 1*360 = 360, and everything in between
	let hue = Math.random() * 360;
	ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
}

// and a prototype method
Gesture.prototype = {
	drag : function(x, y){
		// pythagorean theorem
		// to calculate the distance from the last point
		// to the current event point
		// mousemove polls the mouse position at even intervals
		// so distance is a proxy for how fast user is moving.
		let a = x - this.x;
		let b = y - this.y;
		// Math.sqrt as its name implies takes the square root
		// of the argument.
		let c = Math.sqrt( a*a + b*b );

		// I'm dividing subtracting c/2 from x and y
		// so that the center of the square corresponds
		// to the current mouse position
		ctx.fillRect(x - c/2, y - c/2, c, c);

		// reset the last coordinates...
		this.x = x;
		this.y = y;
	}
};


