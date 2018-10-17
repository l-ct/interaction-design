var students = [
	'Tanya',
	'Brigitte',
	'Mukul',
	'Rohan',
	'Sang',
	'Christopher',
	'Brittany',
	'Rhea',
	'Yoon',
	'Ting',
	'Ryan',
	'Hyeon',
	'Sophia',
	'Yu Tim',
	'Melody'
];

var div = document.getElementById('container');

var html = '';

for(var i = 0; i < 10; i++){
  html += 'Hello! ';
}

div.innerHTML = html;

function howdy(){
  console.log('howdy!');
}
