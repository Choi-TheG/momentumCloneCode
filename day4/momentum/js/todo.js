const todoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
	// console.dir(event.target.parentElement.innerText);
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
	saveToDos();
}

function paintTodo(newTodo){
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleToDoSubmit(event){
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value ="";
	const newTodoObj = {
		text: newTodo,
		id: Date.now()
	};
	toDos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveToDos();
}

todoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintTodo);
}

