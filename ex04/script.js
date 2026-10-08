const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function addTask() {
    if (taskInput.value.trim() === "") {
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskInput.value.trim();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    totalTasks++;
    taskCount.textContent = totalTasks;

    task.addEventListener("click", function (event) {
        if (event.target !== deleteButton) {
            task.classList.toggle("completed");
        }
    });

    deleteButton.addEventListener("click", function () {
        task.remove();

        totalTasks--;
        taskCount.textContent = totalTasks;
    });

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
