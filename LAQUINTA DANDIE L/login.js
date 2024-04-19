document.addEventListener("DOMContentLoaded", function() {
    let tasks = [];

const loginButton = document.getElementById("loginButton");
const errorMessage = document.getElementById("errorMessage");

loginButton.addEventListener("click", function() {
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if (username.trim() !== "" && password.trim() !== "") {
    // Redirect to home page
    window.location.href = "home.html";
} else {
    // Display error message
    errorMessage.textContent = "Please enter both username and password.";
}
});
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            tasks.push(taskText);
            renderTasks();
            taskInput.value = ""; // Clear input field after adding task
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-button")) {
            const index = Array.from(taskList.children).indexOf(event.target.parentElement);
            tasks.splice(index, 1);
            renderTasks();
        }
    });

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-button";
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
});