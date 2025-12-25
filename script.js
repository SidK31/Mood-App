const title = document.querySelector("#title");
const statusText = document.querySelector("#status");

const blueBtn = document.querySelector("#blueBtn");
const greenBtn = document.querySelector("#greenBtn");
const resetBtn = document.querySelector("#resetBtn");
const darkBtn = document.querySelector("#darkBtn");

const nameInput = document.querySelector("#nameInput");
const greetBtn = document.querySelector("#greetBtn");

blueBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#1e3a8a";
    title.innerText = "Blue Vibe Activated 💙";
    statusText.innerText = "Feeling calm and focused.";
});

greenBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#14532d";
    title.innerText = "Green Vibe Activated 💚";
    statusText.innerText = "Fresh and positive energy!";
});

darkBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#000000";
    title.innerText = "Dark Mode ON 😎";
    statusText.innerText = "Welcome to the dark side 🌙";
});

resetBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#0f172a";
    title.innerText = "Hello, I’m learning Web Dev 🚀";
    statusText.innerText = "Click a button and see magic ✨";
});

greetBtn.addEventListener("click", function () {
    const userName = nameInput.value.trim();

    if (userName === "") {
        statusText.innerText = "⚠️ Please enter your name first!";
    } else {
        title.innerText = `Hello ${userName} 👋`;
        statusText.innerText = `Welcome, ${userName}! Nice to meet you! 🎉`;
        nameInput.value = "";
    }
});

// Mood App Logic
const happyBtn = document.querySelector("#happyBtn");
const focusBtn = document.querySelector("#focusBtn");
const chillBtn = document.querySelector("#chillBtn");
const darkMoodBtn = document.querySelector("#darkMoodBtn");

// Helper function to set active mood button
function setActiveMood(activeButton) {
    // Remove active class from all mood buttons
    happyBtn.classList.remove("active-mood");
    focusBtn.classList.remove("active-mood");
    chillBtn.classList.remove("active-mood");
    darkMoodBtn.classList.remove("active-mood");

    // Add active class to the clicked button
    activeButton.classList.add("active-mood");
}

// Happy Mood - Bright & Positive
happyBtn.addEventListener("click", function () {
    setActiveMood(happyBtn);
    document.body.style.backgroundColor = "#fbbf24";
    title.innerText = "Happy Vibes Only! 😊✨";
    statusText.innerText = "Feeling bright, cheerful, and full of energy! 🌟";
});

// Focus Mood - Calm & Professional
focusBtn.addEventListener("click", function () {
    setActiveMood(focusBtn);
    document.body.style.backgroundColor = "#1e40af";
    title.innerText = "Focus Mode Activated 🧠";
    statusText.innerText = "Time to get things done. Stay calm and focused! 💼";
});

// Chill Mood - Soft & Relaxed
chillBtn.addEventListener("click", function () {
    setActiveMood(chillBtn);
    document.body.style.backgroundColor = "#059669";
    title.innerText = "Chill Mode On 🌿";
    statusText.innerText = "Take it easy, relax, and enjoy the moment. 🍃";
});

// Dark Mood - Full Dark Mode
darkMoodBtn.addEventListener("click", function () {
    setActiveMood(darkMoodBtn);
    document.body.style.backgroundColor = "#0a0a0a";
    title.innerText = "Dark Mode Engaged 🌙";
    statusText.innerText = "Embrace the darkness. Sleek, minimal, powerful. 🖤";
});

