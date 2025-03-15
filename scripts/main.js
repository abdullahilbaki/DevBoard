// change background color

const colors = [
    "bg-light-sky",
    "bg-red-200",
    "bg-orange-200",
    "bg-yellow-200",
    "bg-lime-200",
    "bg-green-200",
    "bg-teal-200",
    "bg-gray-300",
    "bg-cyan-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-violet-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-rose-200"
];

let bgColor = document.getElementById("bg-color");
let body = document.body;
let lastColor = "";

bgColor.addEventListener("click", function () {
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === lastColor);

    lastColor = newColor;

    body.classList.forEach(cls => {
        if (cls.startsWith("bg-")) {
            body.classList.remove(cls);
        }
    });

    body.classList.add(newColor);
});

// Today's date
document.getElementById("today-date").innerText = new Date().toDateString();

// completed buttons
let completedBtns = document.getElementsByClassName("completed");
let completedTasks = document.getElementById("completed-tasks");
let assignedTasks = document.getElementById("assigned-tasks");
let logs = document.getElementById("logs");
let clearHistory = document.getElementById("clear-history");

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

        let today = new Date();
        let currentTime = today.toLocaleTimeString();
        let taskTitle = completedBtns[i].closest(".cards").querySelector("h2").innerText;


        logs.innerHTML += `
        <div class="rounded-lg bg-light-sky p-4 flex items-center gap-4 my-4">
            <p class="text-sm text-slate-700">You have Completed the task ${taskTitle} at ${currentTime}</p>
        </div>
        `;
    });
}


clearHistory.addEventListener("click", function () {
    logs.innerHTML = "";
});


function disableButton(button) {
    if (button.disabled) return;

    button.disabled = true;
    button.classList.add("opacity-25", "cursor-not-allowed");
    button.classList.remove("hover:bg-blue-600", "active:scale-95", "cursor-pointer");
}

