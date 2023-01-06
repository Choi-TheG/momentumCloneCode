/*
	브라우저는 submit을 하면 새로고침하게 기본적으로 세팅이 되어있음
	이를 하지않기 위해서는 function에 parameter값을 넣고
	parameter.preventDefault();
	를 실행하게 되면 기본적으로 브라우저에서 제공하는 기본 동작을 실행하지 못하게 함.

	function functionName(){} 과 같이 parameter가 없이
	document.addEventListener("click", functionName); 형식으로 실행시키면
	브라우저는 알아서 functionName({event information}){}처럼 event 정보를 가지고 실행함.
	그래서 기본적으로 제공하는 기능들을 실행하지 않으려면 function functionName(event){ event.preventDefault(); } 를 통해 기본 동작을 막아준다.
	해당 function 안에서 console.dir(event);를 해보면 event의 속성에 preventDefault=true;가 되어있을 거고 기본 동작이 막혀있다는 뜻이다.

	console.log() = 값을 중점적으로 출력.
	console.dir() = 속성을 중점적으로 출력.
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";	// 값을 받을 변수가 string 값만 받는다면 upper_case로 변수명을 하는게 관습
const USERNAME_KEY = "username";

const link = document.querySelector("a");

// function onLoginSubmit(event){
// 	event.preventDefault();
// 	console.log(event);

// 	console.dir(loginInput);
// 	console.log(loginInput.value);
// }

function onLoginSubmit(event){
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings();
}

function paintGreetings(username){
	greeting.innerText = `Hola ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else{
	paintGreetings(savedUsername);
}

// function handleLinkClick(event){
// 	event.preventDefault();

// }

// loginForm.addEventListener("submit",onLoginSubmit);
// link.addEventListener("click",handleLinkClick);
