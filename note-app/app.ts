document.addEventListener("DOMContentLoaded", () => {
  interface Note {
    id: string;
    title: string;
    description: string;
  }

  const titleInput = document.getElementById("title") as HTMLInputElement;
  const descriptionInput = document.getElementById("description") as HTMLTextAreaElement;
  const noteList = document.getElementById("noteList")!;
  const addNoteBtn = document.getElementById("addNote")!;

  function getNotes(): Note[] {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
  }

  function saveNotes(notes: Note[]) {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function renderNotes() {
    noteList.innerHTML = "";
    const notes = getNotes();

    notes.forEach(note => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${note.title}</strong><p>${note.description}</p>
      <button class="delete">Sil</button>`;

      li.querySelector(".delete")!.addEventListener("click", () => {
        deleteNote(note.id);
      });

      noteList.appendChild(li);
    });
  }

  function addNote() {
    const newNote: Note = {
      id: Date.now().toString(),
      title: titleInput.value.trim(),
      description: descriptionInput.value.trim()
    };

    const notes = getNotes();
    notes.push(newNote);
    saveNotes(notes);
    renderNotes();

    titleInput.value = "";
    descriptionInput.value = "";
  }

  function deleteNote(id: string) {
    const notes = getNotes().filter(note => note.id !== id);
    saveNotes(notes);
    renderNotes();
  }

  addNoteBtn.addEventListener("click", addNote);
  renderNotes();
});