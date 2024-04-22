
function validateUser(){
  event.preventDefault();
  window.location.href = "homescreen.html";
  console.log(log_email.value + "\n" + log_pass.value)
}

var tasks = [];

    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var task = taskInput.value.trim();
        
        if (task !== "") {
            tasks.push(task);
            displayTasks();
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        displayTasks();
    }

    function displayTasks() {
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        tasks.forEach(function(task, index) {
            var li = document.createElement("li");
            li.textContent = task;

            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = function() {
                deleteTask(index);
            };

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }