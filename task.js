
document.addEventListener("DOMContentLoaded", function() { 
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");


    let tasks = [];
    
    function addTask(taskValue) {
        tasks.push(taskValue);
        renderTasks();
    }
    
    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }


    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn";
            deleteButton.addEventListener("click", () => deleteTask(index));
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
}

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskValue = taskInput.value.trim();
    if (taskValue !== "") {
        addTask(taskValue);
        taskInput.value = "";
    }
});


renderTasks();
})