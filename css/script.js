let tasks = [];


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim(); 

    if (taskText !== "") {
        tasks.push(taskText); 
        taskInput.value = ""; 
        displayTasks(); 
    } else {
        alert("Please enter a task.");
    }
}


function deleteTask(index) {
    tasks.splice(index, 1); 
    displayTasks(); 
}


function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(index); 

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}