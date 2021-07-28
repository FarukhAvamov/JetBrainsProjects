const addTask = document.getElementById("add-task-button");
const inputEl = document.getElementById("input-task");
const listEl = document.querySelector("ul");

//eventListener
addTask.addEventListener("click", addGoal);

function addGoal(event) {

    event.preventDefault();
   const liElement = document.createElement("li");
   liElement.className = "task";
   const checkBox = document.createElement("input");
   checkBox.type = "checkbox";
   checkBox.className = "task";
   checkBox.classList.add('strikeout');
   const createSpan = document.createElement("span");
   createSpan.className = "task";
    const dltButton = document.createElement("button");
    dltButton.className = "delete-btn";
   const enteredValue = inputEl.value;
   if (enteredValue !== "") {
       listEl.appendChild(liElement);
       createSpan.append(enteredValue);
       liElement.appendChild(checkBox);
       liElement.appendChild(createSpan);
       liElement.appendChild(dltButton);
       taskList.push(
            {
                name : inputEl.value,
            }
        )
       let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

       inputEl.value = "";
   }
}
listEl.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        let lis = e.target.parentNode;
        listEl.removeChild(lis);
    }

});

function enterEvent(event) {
    if(event.keyCode == 13) {
        addGoal();
    }
}