const welcomeScreen = document.getElementById("welcome-screen");
const nameInput = document.getElementById("name-input");
const enterButton = document.getElementById("enter-button");
const welcomeMessage = document.getElementById("welcome-message");

enterButton.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name) {
        welcomeMessage.textContent = "Welcome, " + name + "!";
        welcomeScreen.classList.add("hidden");
    }
});