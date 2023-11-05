
import '../styles/note.css';
import React, { useState } from 'react';
import NoteEditor from "./NoteEditor";
import NoteActions from "./NoteActions";
import {v4 as uuid} from "uuid";

function App(){
    const [note, setNote] = useState([])
    const [activeNote, setActiveNote] = useState(false);
    const getActiveNote = () => {
        return note.find(({ id }) => id === activeNote);
    };

    const addNote= () => {
        const newNote = {
                    id: uuid(),
                    title: "Новая запись",
                    body: " "
                }
        setNote([newNote, ...note])
        setActiveNote(newNote.id)
    }

    const updateNote = (updatedNote) => {
        const updatedNotesArr = note.map((note) => {
            if (note.id === updatedNote.id) {
                return updatedNote;
            }
            return note;
        });
        setNote(updatedNotesArr);
    };
    const deleteNote = (noteId) => {
        setNote(note.filter(({ id }) => id !== noteId));
    };

    return(
        <main>
            <header className="header"></header>
            <div className="App">
                <NoteActions
                    note={note}
                    setNote={setNote}
                    addNote={addNote}
                    deleteNote={deleteNote}
                    setActiveNote = {setActiveNote}
                />
                <NoteEditor activeNote={getActiveNote()} updateNote={updateNote} />
            </div>
        </main>
        );
}
export default App;