const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
// duration of exercise
let startingMinutes = 2;
let time = startingMinutes * 60;
// time between random notes in milliseconds
const speed = 2000;
let notePicker;
let timer;

const updateCountdown = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  clock.innerText = `${minutes}:${seconds}`;
  time--;
};

const pickNote = () => {
  let index = Math.floor(Math.random() * (notes.length - 1));
  const noteDisplay = document.getElementById("note-display");
  myNote = notes[index];
  noteDisplay.innerText = myNote;
};

const start = () => {
  timer = setInterval(updateCountdown, 1000);
  notePicker = setInterval(pickNote, speed);
};

const stop = () => {
  clearInterval(timer);
  clearInterval(notePicker);
  const noteDisplay = document.getElementById("note-display");
  noteDisplay.innerText = "";
};

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  const clock = document.getElementById("clock");
  startButton.addEventListener("click", start);
  stopButton.addEventListener("click", stop);
});
