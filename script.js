const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// time between random notes in milliseconds
const duration = 2000;
let timer;

const pickNote = () => {
  let index = Math.floor(Math.random() * (notes.length - 1));
  const noteDisplay = document.getElementById("note-display");
  myNote = notes[index];
  noteDisplay.innerText = myNote;
};

const start = () => {
  timer = setInterval(pickNote, duration);
};

const stop = () => {
  clearInterval(timer);
  const noteDisplay = document.getElementById("note-display");
  noteDisplay.innerText = "";
};

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  startButton.addEventListener("click", start);
  stopButton.addEventListener("click", stop);
});
