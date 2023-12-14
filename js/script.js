fetch('https://cors-anywhere.herokuapp.com/api.sl.se/api2/realtimedeparturesV4.json?key=d84c0e38afa248ddbfad0c63d3a09ead&siteid=7000&timewindow=30')
.then(res => res.json())
.then(data1 => {
    for(let i = 0; i < 7; i++){
        let bus = data1.ResponseData.Buses[i];
        document.getElementById("buss").innerHTML += `<div class="layout"> ${bus.LineNumber} ${bus.Destination} ${bus.DisplayTime} <br>`;
    }
})

fetch('https://cors-anywhere.herokuapp.com/api.sl.se/api2/realtimedeparturesV4.json?key=d84c0e38afa248ddbfad0c63d3a09ead&siteid=7006&timewindow=30')
.then(res => res.json())
.then(data => {
    for(let i = 0; i < 6; i++){
        let trains = data.ResponseData.Trains[i];
        document.getElementById("trains").innerHTML += `<div class="layout"> ${trains.LineNumber} ${trains.Destination} ${trains.DisplayTime} <br>`;
    }
})


fetch('https://api.openweathermap.org/data/2.5/weather?q=huddinge&appid=9a9c1e763b47c3d5abc0dd39cb95d8cd&units=metric')
.then(res => res.json()) 
.then(data => { 
    weather(data);
})


function weather(data){
    var round_number = Math.floor(data.main.temp);
    document.getElementById('weatherIcon').src="https://openweathermap.org/img/wn/02d.png";
    document.getElementById('temp').innerHTML = `${round_number} °C`;
}

const date = new Date();

let day = date.getDate();
let month = date.getMonth()+1; //+1 för att månaden börjar på 0 för januari, 1 för februari osv.
let year = date.getFullYear();

function addZero(i){
    if(i < 10) {i = "0" + i}
    return i;
}

let time = addZero(date.getHours());
let min = addZero(date.getMinutes());


document.getElementById('date').innerHTML = `${year}-${month}-${day}`;
document.getElementById('time').innerHTML = `${time}:${min}`;
