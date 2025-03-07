// Motivational Quotes
const quotes = [
    "This too shall pass.",
    "Focus on the good and let go of the bad.",
    "You are stronger than you think.",
    "The best is yet to come.",
    "Every ending is a new beginning."
];

function showMotivationalQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motivationalQuote').innerText = randomQuote;
}
setInterval(showMotivationalQuote, 10000); // Change the quote every 10 seconds

// Anniversary Notifications
function calculateAnniversary() {
    const breakupDate = new Date(document.getElementById('breakupDate').value);
    const currentDate = new Date();
    if (isNaN(breakupDate)) {
        document.getElementById('anniversaryResult').innerText = "Please select a valid date.";
        return;
    }

    const diffTime = currentDate - breakupDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    const diffMinutes = Math.floor((diffTime / (1000 * 60)) % 60);
    const diffSeconds = Math.floor((diffTime / 1000) % 60);

    const coupleName = document.getElementById('coupleName').value || "You";
    document.getElementById('anniversaryResult').innerText = `${coupleName} have been apart for ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, and ${diffSeconds} seconds.`;
}

// Mood Tracker
const moodLogs = [];
function saveMood() {
    const mood = document.getElementById('moodEntry').value;
    if (mood) {
        moodLogs.push(mood);
        document.getElementById('moodResult').innerText = "Mood saved!";
        document.getElementById('moodEntry').value = "";
    }
}

// Memory Box
const memoryLogs = [];
function saveMemory() {
    const memory = document.getElementById('memoryEntry').value;
    if (memory) {
        memoryLogs.push(memory);
        document.getElementById('memoryBox').innerHTML = memoryLogs.map(mem => `<p>${mem}</p>`).join('');
        document.getElementById('memoryEntry').value = "";
    }
}

// Progress Tracker
function viewProgress() {
    const progress = `You've logged ${moodLogs.length} moods and ${memoryLogs.length} memories.`;
    document.getElementById('progressResult').innerText = progress;
}

// Initialize a random motivational quote
showMotivationalQuote();