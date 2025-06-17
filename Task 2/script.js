const noteContainer = document.getElementById('noteContainer');
const addNoteButton = document.getElementById('addNote');


function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "[]");
}

function saveNotes() {
  const notes = [];
  document.querySelectorAll('.note:not(.add-note)').forEach(note => {
    notes.push(note.innerText.trim());
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}


function createNote(content = "") {
  const note = document.createElement('div');
  note.className = 'note';
  note.contentEditable = true;
  note.textContent = content;

  
  note.addEventListener("input", saveNotes);

  
  note.ondblclick = () => {
    note.remove();
    saveNotes();
  };

  noteContainer.insertBefore(note, addNoteButton);
}


addNoteButton.onclick = () => {
  createNote();
};

window.onload = () => {
  const notes = getNotes();
  notes.forEach(content => createNote(content));
};