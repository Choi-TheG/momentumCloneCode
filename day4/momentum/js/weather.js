import config from './apikey.js';

const API_KEY = config.apikey;

function onGeoOk(position){
	const lat = position.coords.latitude;	// 위도
	const lon = position.coords.longitude;	// 경도
	// console.log(position);
	console.log("you live it", lat, lon);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	console.log(url);
	fetch(url)
		.then(response => response.json())
		.then(data => {
			// console.log(data.name, data.weather[0].main);
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			// console.log(city, weather);
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
			// const name = data.name;
			// const weather = data.weather[0].main;
	});
}

function onGeoError(){
	alert("Can't find you. No wather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
