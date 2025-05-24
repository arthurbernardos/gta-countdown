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
    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    
    // Create a formatted display with colons (dd:hh:mm:ss)
    const countdownDisplay = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    
    // Update the DOM elements
    daysElement.textContent = formattedDays;
    hoursElement.textContent = formattedHours;
    minutesElement.textContent = formattedMinutes;
    secondsElement.textContent = formattedSeconds;
    
    // Add a glow effect to the element that just changed
    const allElements = [daysElement, hoursElement, minutesElement, secondsElement];
    allElements.forEach(el => el.classList.remove('glow-change'));
    
    // Determine which element changed and add the glow effect
    if (seconds === 0) {
        if (minutes === 0) {
            if (hours === 0) {
                daysElement.classList.add('glow-change');
            } else {
                hoursElement.classList.add('glow-change');
            }
        } else {
            minutesElement.classList.add('glow-change');
        }
    }
    
    // Always pulse the seconds element since it changes every second
    secondsElement.classList.add('pulse');
    setTimeout(() => {
        secondsElement.classList.remove('pulse');
    }, 500);
    
    // Add digital clock effect to show the formatted time
    const clockDisplay = document.createElement('div');
    clockDisplay.className = 'digital-clock';
    clockDisplay.textContent = countdownDisplay;
    
    // If the digital clock doesn't exist yet, add it
    if (!document.querySelector('.digital-clock')) {
        const container = document.querySelector('.countdown-container');
        container.insertAdjacentElement('afterend', clockDisplay);
    } else {
        // Otherwise just update the existing one
        document.querySelector('.digital-clock').textContent = countdownDisplay;
    }
}

/**
 * Handles what happens when the release date is reached
 */
function handleReleaseDay() {
    // Update countdown display
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    
    // Update digital clock
    if (document.querySelector('.digital-clock')) {
        document.querySelector('.digital-clock').textContent = '00:00:00:00';
        document.querySelector('.digital-clock').classList.add('released');
    }
    
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

.glow-change {
    animation: glow-animation 2s ease-in-out;
}

@keyframes glow-animation {
    0% { box-shadow: 0 0 10px var(--gta-neon-blue), 0 0 20px rgba(0, 255, 255, 0.5); }
    50% { box-shadow: 0 0 20px var(--gta-neon-yellow), 0 0 40px var(--gta-neon-yellow); }
    100% { box-shadow: 0 0 10px var(--gta-neon-blue), 0 0 20px rgba(0, 255, 255, 0.5); }
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
    background-color: rgba(255, 0, 255, 0.7) !important;
    padding: 1.5rem !important;
    animation: pulse 1.5s infinite;
}

.released {
    color: white;
    font-size: 2rem !important;
    font-weight: bold;
    text-shadow: 
        0 0 5px var(--gta-neon-pink),
        0 0 10px var(--gta-neon-pink),
        0 0 20px var(--gta-neon-purple);
}

.release-day {
    background-image: url('https://raw.githubusercontent.com/arthurbernardos/gta-countdown/main/images/release-bg.jpg');
}

.digital-clock {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    text-align: center;
    background: linear-gradient(90deg, #ff2c75, #bc2eff, #4e5bff, #2ad2ff, #ffa857);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 300% 300%;
    animation: gradient-text-animation 8s ease infinite;
    padding: 1rem;
    margin: 2rem auto;
    max-width: 600px;
    border-radius: 8px;
    border: none;
    letter-spacing: 5px;
    position: relative;
    overflow: hidden;
    box-shadow: none;
}

.digital-clock::before {
    display: none;
}

@media (max-width: 768px) {
    .digital-clock {
        font-size: 2rem;
        padding: 0.8rem;
    }
}

@media (max-width: 480px) {
    .digital-clock {
        font-size: 1.5rem;
        padding: 0.5rem;
        letter-spacing: 3px;
    }
}
`;
document.head.appendChild(style);

