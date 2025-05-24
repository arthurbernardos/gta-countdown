# GTA 6 Countdown Website

A simple, elegant countdown website that displays the time remaining until the release of Grand Theft Auto VI (GTA 6) on May 26, 2026.

![GTA 6 Countdown Preview](https://via.placeholder.com/800x400?text=GTA+6+Countdown+Preview)

## About

This project creates a responsive, visually appealing countdown timer for the highly anticipated release of Grand Theft Auto VI. The countdown displays days, hours, minutes, and seconds remaining until the game's launch.

## Features

- Real-time countdown to GTA 6 release date (May 26, 2026)
- Responsive design that works on desktop and mobile devices
- GTA-themed aesthetic with a dark color scheme
- Animated elements for a dynamic user experience
- Special display for when the release date is reached

## How to Use

### Visit the Website

The countdown is hosted on GitHub Pages and can be accessed at:
[https://arthurbernardos.github.io/gta-countdown/](https://arthurbernardos.github.io/gta-countdown/)

### Run Locally

If you want to run this project locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/arthurbernardos/gta-countdown.git
   ```
2. Open the `index.html` file in any modern web browser

## Technical Implementation

This project is built using:

- **HTML5** - For structure and content
- **CSS3** - For styling and responsive design
- **JavaScript** - For the countdown logic and animations
- **GitHub Pages** - For hosting

The countdown logic calculates the time difference between the current date and May 26, 2026, and updates the display every second. The site also handles what happens when the release date is reached, displaying a special message.

## Customization

To use this countdown for a different date or purpose:

1. Edit the release date in `script.js` (line 8):
   ```javascript
   const releaseDate = new Date('May 26, 2026 00:00:00').getTime();
   ```
2. Update text and styling in `index.html` and `styles.css` as needed

## Author

Created by [Arthur Bernardos](https://github.com/arthurbernardos)

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This is an unofficial fan project. Grand Theft Auto and GTA are registered trademarks of Rockstar Games, a subsidiary of Take-Two Interactive.
