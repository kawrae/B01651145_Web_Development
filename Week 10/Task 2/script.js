document.addEventListener("DOMContentLoaded", function () {
    const changeCol = document.getElementById("changeColour");
    const playMove = document.getElementById("playMovement");
    changeCol.addEventListener("click", function () {
        tableRows.forEach((row) => {
            if (row.classList.contains("highlighted")) {
                row.classList.remove("highlighted");
            } else {
                row.classList.add("highlighted");
            }
        });
    });



    const tableRows = document.querySelectorAll("#data tbody tr");
    const playAnim = document.querySelector("div");
    playMove.addEventListener("click", function () {
        const currentState = playAnim.style.animationPlayState;
        if (currentState === "paused" || currentState === "") {
            playAnim.style.animationPlayState = "running";
        } else {
            playAnim.style.animationPlayState = "paused";
        }
    });
});