const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");
const deleteButtonEl = document.querySelectorAll(".deleteButton")

function addListItem() {
	todoInputEl.addEventListener("keypress", function(event) {
		if (event.keyCode === 13) {
			let newListItem = createListItem(todoInputEl.value);
			todoListEl.insertBefore(newListItem, todoListEl.childNodes[0])
			todoInputEl.value = "";
		} 
	})
}

function toggleDone() {
	todoListEl.addEventListener("click", function(event) {
		if (event.target.classList.contains("far")) {
			event.target.parentNode.parentNode.classList.add("deleted");
			setTimeout(function(){event.target.parentNode.parentNode.remove()}, 500);
		}
		
		if (event.target.classList.contains("todo__item") && !event.target.classList.contains("deleteButton")) {
			event.target.classList.toggle("done");
		}
	})
}

// function toggleDone() {
// 	for (let elem of todoItemEls) {
// 		elem.addEventListener("click", function() {
// 			elem.classList.toggle("done");
// 		})
// 	}
// }

function createListItem(text) {
	const newListElement = document.createElement("li");
	newListElement.innerHTML = `${text}<span class="deleteButton"><i class="far fa-trash-alt"></i></span>`;
	newListElement.setAttribute("class", "todo__item");
	return newListElement
}

toggleDone();
addListItem();