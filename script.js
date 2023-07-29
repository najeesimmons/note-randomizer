const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const pickNote = () => {
  const index = Math.floor(Math.random() * (notes.length - 1));
  myNote = notes[index];
  const noteDisplay = document.getElementById("note-display");
  noteDisplay.innerText = myNote;
};

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", pickNote);
});
