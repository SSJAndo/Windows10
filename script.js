function openApp(appName) {
  const appModal = document.getElementById(appName);
  appModal.style.display = "block";
}

function closeApp(appName) {
  const appModal = document.getElementById(appName);
  appModal.style.display = "none";
}

function addNote() {
  // const noteText = document.querySelector("#currentTime");
  const noteList = document.getElementById("noteList");
  const noteItem = document.createElement("p");
  const noteText = document.getElementById("noteText");
  console.log(noteText.value);
  noteItem.innerText = noteText.value;
  console.log(noteItem);

  noteList.appendChild(noteItem);
  noteText.value = "";
}

function updateTime() {
  const currentTime = new Date();
  const currentTimeElement = document.getElementById("currentTime");
  currentTimeElement.innerText = currentTime.toLocaleTimeString();
}

// Update the current time every second
setInterval(updateTime, 1000);

// Initially set the current time
updateTime();

const addNoteButton = document.getElementById("noteButton");
console.log(addNoteButton);

// addNoteButton.addEventListener("click", addNote);

//If we need to call more than one function/ call this method
addNoteButton.addEventListener("click", () => {
  addNote();
});

const closeButton = document.getElementById("closeButton");
console.log(closeButton);

closeButton.addEventListener("click", () => {
  closeApp("notepad");
});

const openButton = document.getElementById("notePadIcon");

openButton.addEventListener("click", () => {
  openApp("notepad");
});
