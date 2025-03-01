const discoverBtn = document.getElementById("discover");
const toDeskBtn = document.getElementById("to-desk");

if (discoverBtn) {
    discoverBtn.addEventListener("click", function () {
        window.location.href = "./blog.html";
    });
}

if (toDeskBtn) {
    toDeskBtn.addEventListener("click", function () {
        window.location.href = "./index.html";
    })
}