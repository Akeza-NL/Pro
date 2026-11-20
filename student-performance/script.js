const button = document.getElementById("wrongButton");
const goal = document.getElementById("goal");

button.addEventListener("click", function () {
    goal.textContent =
        "I am taking one step closer to becoming a professional developer!";
});