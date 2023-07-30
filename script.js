const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
// duration of exercise
let startingMinutes = 1;
let time = startingMinutes * 60;
// time between random notes in milliseconds
const speed = 2000;
let notePicker;
let timer;
let noteDisplay;
let clock;

const updateCountdown = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  clock.innerText = `${minutes}:${seconds}`;
  time--;
  if (time < 0) {
    //stop the setInterval when time = 0 for avoid negative time
    clearInterval(timer);
    clearInterval(notePicker);
    time = startingMinutes * 60;
  }
};

const pickNote = () => {
  let index = Math.floor(Math.random() * (notes.length - 1));
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
  noteDisplay.innerText = "";
  clock.innerText = "";
};

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  // this seems to work when vars are declared at top of file and defined here
  noteDisplay = document.getElementById("note-display");
  clock = document.getElementById("clock");
  startButton.addEventListener("click", start);
  stopButton.addEventListener("click", stop);
});
