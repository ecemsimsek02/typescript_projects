document.addEventListener("DOMContentLoaded", function () {
    var titleInput = document.getElementById("title");
    var descriptionInput = document.getElementById("description");
    var noteList = document.getElementById("noteList");
    var addNoteBtn = document.getElementById("addNote");
    function getNotes() {
        var notes = localStorage.getItem("notes");
        return notes ? JSON.parse(notes) : [];
    }
    function saveNotes(notes) {
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    function renderNotes() {
        noteList.innerHTML = "";
        var notes = getNotes();
        notes.forEach(function (note) {
            var li = document.createElement("li");
            li.innerHTML = "<strong>".concat(note.title, "</strong><p>").concat(note.description, "</p>\n      <button class=\"delete\">Sil</button>");
            li.querySelector(".delete").addEventListener("click", function () {
                deleteNote(note.id);
            });
            noteList.appendChild(li);
        });
    }
    function addNote() {
        var newNote = {
            id: Date.now().toString(),
            title: titleInput.value.trim(),
            description: descriptionInput.value.trim()
        };
        var notes = getNotes();
        notes.push(newNote);
        saveNotes(notes);
        renderNotes();
        titleInput.value = "";
        descriptionInput.value = "";
    }
    function deleteNote(id) {
        var notes = getNotes().filter(function (note) { return note.id !== id; });
        saveNotes(notes);
        renderNotes();
    }
    addNoteBtn.addEventListener("click", addNote);
    renderNotes();
});
