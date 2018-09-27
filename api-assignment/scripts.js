// Hello class!

// The double // slash here creates a "comment".
// It allows me to write text that the compiler will ignore.
// Without it all this text would generate an error.

// - - - - - - - - - - - - - - - - - - - problem 1
// - - - - - - - find London's latitude

// below is a first URL
// notice that it contains an API key and a query.
// notice the ? mark and the & and the = signs that help
// separate and assign keys and values
// copy and paste the string's text in a browser url
var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=f4733ffb6395ff65066ef6800f002dc2';

// Below is a first function!
// There's a ton going on here:
// - the jQuery variable $
// - the jQuery getJSON method
// - a variable weatherUrl passed as a paramater
// - as well as an anonymous callback: data => {}
//   passed as a second parameter
// Phew that's a log of jargon!
// We'll get to all of that soon enough.
// For now just know that this function takes
// the weatherUrl variable that was initialized above,
// and with it makes a server request,
// and then sticks the result in another variable called data,
// which is available inside the two { } curly braces.
$.getJSON(weatherUrl, data => {

  // this statement takes the data which was returned by the server
  // and outputs it to the console.
  // Inspect that content and
  // see how you would access different parts of it
  console.log(data);

  // find London's latitude
  // This is what we did in class
  // this one is done for you!
  console.log(data.coord.lat);

// this is the closing bracket and parenthesis that end the previous function.
});


// - - - - - - - - - - - - - - - - - - - problem 2
// output a near earth asteroid's estimated diameter in meters

var nasaData = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-10-02&end_date=2018-10-02&detailed=true&api_key=e49aUmmYyssoot72jpWzxUrJsVqn4EJC1rlALBrY';
$.getJSON(nasaData, data => {
  console.log(data);
  console.log('Problem 2: replace this string with the diameter in meters of a near earth asteroid.');
});


// - - - - - - - - - - - - - - - - - - - problem 3
// output any Trump article headline

var nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=a402ecb9e04b43cc8eecee671f0136cc';
$.getJSON(nytUrl, data => {
  console.log(data);
  console.log('Problem 3: replace this string with any NYT trump article headline.');
});
