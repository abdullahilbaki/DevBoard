// Today's date
document.getElementById("today-date").innerText = new Date().toDateString();

// completed buttons
let completedBtns = document.getElementsByClassName("completed");
let completedTasks = document.getElementById("completed-tasks");
let assignedTasks = document.getElementById("assigned-tasks");

for (let i = 0; i < completedBtns.length; i++) {
    completedBtns[i].addEventListener("click", function () {
        alert("Board updated successfully.");

        disableButton(completedBtns[i]);
        let completedCount = Number(completedTasks.innerText);
        let assignedCount = Number(assignedTasks.innerText);

        if (assignedCount === 1) {
            alert("Congrats!!! You have completed all the current tasks.");
        }

        if (assignedCount > 0) {
            completedTasks.innerText = completedCount + 1;
            assignedTasks.innerText = assignedCount - 1;
        }
    });
}


function disableButton(button) {
    if (button.disabled) return;

    button.disabled = true;
    button.classList.add("opacity-25", "cursor-not-allowed");
    button.classList.remove("hover:bg-blue-600", "active:scale-95", "cursor-pointer");
}

