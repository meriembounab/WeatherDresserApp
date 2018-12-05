/*function getWeather(){
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
let apiKey = '23b8432249566e20e8076419e974a491';
let city = document.getElementById("cityinput").value;
//let city = ${zip};
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url, true);

request.onload = function () {
  // Begin accessing JSON data here
  var weather = JSON.parse(this.response);
  let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
    document.getElementById("root").innerHTML=weather.main.temp+' degrees';
    var sVal = weather.main.temp;
    var iNum = parseFloat(sVal);
    
    if(iNum<40){
    document.getElementById("rec").innerHTML='long sleeve , pants, heavy coat';
    }
    else if(iNum>40 && iNum<60){
    document.getElementById("rec").innerHTML='short sleeve , pants, light coat';
    }
    else{
    document.getElementById("rec").innerHTML='short sleeve , shorts';
    }
*/

    /*const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(container);
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const h1 = document.createElement('h1');
    h1.textContent = `${weather.main.temp} degrees`;
    card.appendChild(h1);*/
    //data.forEach(movie => {
    // Log each movie's title
    //console.log(this.response);
    //});
    
//}

// Send request
//request.send();
//}