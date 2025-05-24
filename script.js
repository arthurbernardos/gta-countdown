/**
 * GTA 6 Countdown Timer
 * This script calculates and displays the time remaining until the
 * GTA 6 release date (May 26, 2026).
 */

// Set the release date for GTA 6
const releaseDate = new Date('May 26, 2026 00:00:00').getTime();

// DOM elements for countdown display
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Container elements
const countdownContainer = document.querySelector('.countdown-container');
const releaseDateInfo = document.querySelector('.release-date');

/**
 * Updates the countdown timer by calculating the time difference
 * between now and the release date
 */
function updateCountdown() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const timeRemaining = releaseDate - now;
    
    // Check if release date has been reached
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        handleReleaseDay();
        return;
    }
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Format the values to ensure leading zeros
    const formattedDays = String(days).padStart(3, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    
    // Update the DOM elements
    daysElement.textContent = formattedDays;
    hoursElement.textContent = formattedHours;
    minutesElement.textContent = formattedMinutes;
    secondsElement.textContent = formattedSeconds;
    
    // Add a pulse effect to the seconds element to indicate it's updating
    secondsElement.classList.add('pulse');
    setTimeout(() => {
        secondsElement.classList.remove('pulse');
    }, 500);
}

/**
 * Handles what happens when the release date is reached
 */
function handleReleaseDay() {
    // Update countdown display
    daysElement.textContent = '000';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    
    // Change the countdown container style
    countdownContainer.style.opacity = '0.7';
    
    // Update release date message
    releaseDateInfo.innerHTML = '<p class="released">GTA 6 IS OUT NOW!</p>';
    releaseDateInfo.classList.add('released-message');
    
    // Add a class to the body for potential full-page effects
    document.body.classList.add('release-day');
}

// Initialize the countdown immediately
updateCountdown();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Add some animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    countdownContainer.querySelectorAll('.countdown-item').forEach((item, index) => {
        // Stagger the animation of each countdown item
        setTimeout(() => {
            item.classList.add('appear');
        }, index * 200);
    });
});

// Add a CSS class for the animation effect mentioned above
const style = document.createElement('style');
style.textContent = `
.pulse {
    animation: pulse-animation 0.5s ease-in-out;
}

@keyframes pulse-animation {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.appear {
    opacity: 1;
    transform: translateY(0);
}

.countdown-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.released-message {
    background-color: rgba(229, 9, 20, 0.7) !important;
    padding: 1.5rem !important;
    animation: pulse 1.5s infinite;
}

.released {
    color: white;
    font-size: 2rem !important;
    font-weight: bold;
}

.release-day {
    background-image: url('https://raw.githubusercontent.com/dummy/gta-countdown/main/images/release-bg.jpg');
}
`;
document.head.appendChild(style);

