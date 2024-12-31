Spotify Web Player Clone
Overview
This project is a clone of the Spotify web player, designed to provide a simple interface for playing music. It features a navigation bar, song list with play buttons, a progress bar, and control buttons for playing, pausing, and skipping songs.

Features
Navigation Bar: Includes brand logo and links.

Song List: Displays songs with play buttons.

Progress Bar: Shows the current position in the song.

Control Buttons: Includes play, pause, previous, and next controls.

Responsive Design: Adjusts layout for different screen sizes.

Technologies Used
HTML: Structure of the web page.

CSS: Styling for the web page, including fonts, colors, and layout.

JavaScript: Functionality for playing songs, updating the progress bar, and handling user interactions.

FontAwesome: Icons for control buttons.

How to Run
Clone the repository to your local machine.

Navigate to the project directory.

bash
cd spotify-clone
Open the index.html file in your web browser.

Code Explanation
HTML
The index.html file provides the structure of the web page, including the navigation bar, song list, and control buttons.

CSS
The style.css file styles the web page. It includes:

Global styles and resets.

Styling for the navigation bar, container, song items, and bottom controls.

Media queries for responsive design.

JavaScript
The script.js file adds functionality to the web player. It includes:

Initialization of variables and setting up the song list.

Handling play/pause, next/previous controls, and updating the progress bar.

Managing individual song play.

Example
Here is a snippet of the JavaScript code used to handle play/pause functionality:

js
let audioElement = new Audio("assets/song1.mp3");
let masterPlay = document.getElementById("masterPlay");

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
});

