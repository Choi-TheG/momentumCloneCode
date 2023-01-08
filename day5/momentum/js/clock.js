const clock = document.querySelector("h2#clock");

function getClock(){
	const date = new Date();
	const hours = String(date.getHours()).padStart(2,"0");
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 한번 실행시켜줌으로서 창이 열렸을 때 바로 한번 실행하고 그 다음 1초마다 인터벌
setInterval(getClock, 1000); // seyInterval(호출할 함수, 시간); 1000ms = 1s