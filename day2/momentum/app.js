///////////////////// day 2 ///////////////////////////////////////
// Document object
document.title = "Hello! From JS!";

// HTML in JavaScript
// const title = document.getElementById("title");

// title.innerText = "Got you!";

// Searching for Elements
/*
	document.getElementById() = id를 찾음. id이기 때문에 하나의 값을 반환
	document.getElementByClassName() = class를 찾음. class는 여러개의 값이 있을 수 있기 때문에 배열을 반환
	document.querySelector() = CSS selector처럼 사용할 수 있기 때문에 간편하고 유용. 조건에 부합하는 첫 번째 요소를 반환
	document.querySelectorAll() = 조건에 부합하는 모든 요소를 반환
*/
const title1 = document.getElementsByClassName("hola");
const title2 = document.querySelector(".hola h1"); // class = "hola"에서 element = h1인 쿼리를 반환 (하위요소도 지정해줄 수 있음)
const title3 = document.querySelector(".hola h1:first-child");
const title4 = document.querySelector(".hola");

title2.innerText = "Mahala";

// Events

// const eventTitle = document.querySelector("div.hola:first-child h1");
const eventTitle = document.querySelector(".hola h1");
console.dir(eventTitle);

function handleTitleClick(){
	// eventTitle.className = "active";
	eventTitle.classList.toggle("clicked"); // toggle은 신이다
}

eventTitle.addEventListener("click", handleTitleClick);

/*
function handleTitleClick(){
	const currentColor = eventTitle.style.color;
	let newColor;
	if(currentColor === "blue"){
		newColor = "tomato";
	} else{
		newColor = "blue";
	}
	eventTitle.style.color = newColor;
}

function handleMouseEnter(){
	console.log("mouse is here!");
	eventTitle.innerText = "Mouse is here!";
}

function handleMouseLeave(){
	console.log("mouse is gone!");
	eventTitle.innerText = "Mouse is gone!";
}

function handleWindowResize(){
	document.body.style.backgroundColor = "#ececec";
}

function handleWindowCopy(){
	alert('copier!');
}

function handleWindowOffline(){
	alert('SOS! No WIFI!');
}

function handleWindowOnline(){
	alert('ALL gooood~');
}

eventTitle.addEventListener("click", handleTitleClick); // ★ handleTitleClick 뒤에 ()가 들어가면 안됨 들어가면 이벤트 여부에 관계없이 바로 실행됨
// eventTitle.addEventListener("mouseenter", handleMouseEnter);
// eventTitle.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
*/



///////////////////// day 1 ///////////////////////////////////////
/*
// const(constance, 상수) : 변하지 않는 값
const A = 10;
const B = 2;

// let : variable value
let myName = "theG";

console.log(A + B);
console.log(A * B);
console.log(A / B);
console.log("hello "+ myName);

// let으로 했기 때문에 바꿔줄 수 있음. const였으면 error! 바뀌지 않았을 것
myName = "theGchoi";

console.log("your name is change to : "+ myName);

// boolean
const amIFat = null; // null = 값이 없다는 것을 확실히 함. 비어있다고 선언해주는 것
let something; // 값은 있는데 값이 비어있는 것: undefined
console.log(something, amIFat);

// array
const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(dayOfWeek[4]);
const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy);
toBuy.push("bulgogi");
console.log(toBuy);
console.log(toBuy[9999]);

// object
const gamePlayer = {
	name : "theG",
	points : 99,
	fat : true,

}

console.log(gamePlayer);
console.log(gamePlayer.points);
// points = 20; 을 하면 points가 int(const)값으로 되서 error! player.points = 20; 은 const player 안의 object를 수정하는 것이므로 가능
gamePlayer.points = 15;
// array .push처럼 추가도 가능
gamePlayer.lastName = "choi";
console.log(gamePlayer);
gamePlayer.points += 5;
console.log(gamePlayer.points);

// function
function sayHello(yourName, age){
	console.log("mahala");
	console.log("Hola~ my name is "+yourName);
	console.log("And I'm " + age);
}

sayHello("theG", 28);

// function 2
function plusNan(A, B){
	console.log(A+ B);
}
plusNan();  // NaN : not a number

function plus(firstNum, secondNum){
	console.log(firstNum + secondNum);
}
function divide(a,  b){
	console.log(a/b);
}
plus(8, 16);
divide(8, 16);

// function 3
const functionPlayer = {
	name: "theG",
	sayAloha: function(yourName){
		console.log("Aloha~ " + yourName + "! welcome here~");
	}
}

functionPlayer.sayAloha("choi");

//return
const calculator = {
	plus: function(a,b){
		return a+b;
	},
	minus: function(a,b){
		return a-b;
	},
	times: function(a,b){
		return a*b;
	},
	divide: function(a,b){
		return a/b;
	},
	power: function(a,b){
		return a**b;
	}
}

const plusResult = calculator.plus(1,2);
const minusResult = calculator.minus(2,plusResult);
const timesResult = calculator.times(10,minusResult);
const divideResult = calculator.divide(timesResult,plusResult);
const powerResult = calculator.power(divideResult,minusResult);

console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);

// conditional
console.log(typeof "15",typeof parseInt("15")); // typeof a : a의 type값을 반환. parseInt(a) : a의 값을 Integer type으로 반환.
												// 문자열(ex. asdfasdf)을 int로 바꾸려고하면 NaN(Not a number) 반환
const age = parseInt(prompt("how old are you"));

if(isNaN(age) || age < 0){
	console.log("please write a number");
	console.log(age);
} else if(age < 18){
	console.log("you're too young'");
} else if(age >= 18 && age <= 60){
	console.log("You can drink");
} else{
	console.log("Maybe... I think you need less to drink");
}
*/