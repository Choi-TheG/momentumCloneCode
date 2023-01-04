

///////////////////// day 1 ///////////////////////////////////////
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
