document.getElementById("submit").onclick = function() {
    let newTask = document.getElementById("input").value;
    if (newTask.trim()) {
        addToTask(newTask);
        document.getElementById("input").value = ""; // Clear input after adding task
    }
}

document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});

function addToTask(task) {
    let tasklist = document.getElementById("tasklist");
    let li = document.createElement("li");

    // Create a span to hold the task text
    let taskText = document.createElement("span");
    taskText.textContent = task;

    // Create a div to hold the checkbox and delete button
    let actionDiv = document.createElement("div");
    actionDiv.className = "action-container"; // For styling purposes

    let deleteButton = document.createElement("i");
    deleteButton.className = "bx bxs-trash bx-tada-hover bx-sm delete";
    deleteButton.style.cursor = "pointer";
    deleteButton.onclick = function() { tasklist.removeChild(li) };

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checkbox form-check-input";
    checkBox.style.marginRight = "10px";

    checkBox.onclick = function() {
        if (checkBox.checked) {
            taskText.classList.add("completed"); // Add strikethrough class to task text
        } else {
            taskText.classList.remove("completed"); // Remove strikethrough class
        }
    };

    // Append checkbox and delete button to the action container
    actionDiv.appendChild(checkBox);
    actionDiv.appendChild(deleteButton);

    // Append the task text and action container to the list item
    li.appendChild(taskText);
    li.appendChild(actionDiv);

    tasklist.appendChild(li);
}

const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const body = document.body;

moon.addEventListener("click", () =>{
    body.classList.add("darkmode");
    moon.style.display = "none";
    sun.style.display = "block"
});


sun.addEventListener("click", () =>{
    body.classList.remove("darkmode");
    moon.style.display = "block";
    sun.style.display = "none"
});



