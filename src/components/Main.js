import React, {useState, useContext, useReducer} from 'react'
import Notes from './Notes'
import AddNote from './AddNote'


function Main() {
    const initialState = [
        {
            id:147286491,
            body: "Welcome to Sticky Notes! You can add your own notes here :)",
            color: "#03fc62"
        }
    ]

    const [notes, addNotes] = useState(initialState)
    

    const addToNotes = newNote => {
        let uniqueId = Math.floor(Math.random() * Math.pow(10, 9)) + 1
        let readyNewNote = newNote
        readyNewNote.id = uniqueId
        addNotes([...notes, readyNewNote])
    }

    const deleteFromNotes = noteId => {
        let newNotes = notes.filter(note => !(note.id == noteId))
        addNotes(newNotes)
    }

    return (
        <div className="notes-grid">
            <AddNote notes={notes} notesSubmitHandler={addToNotes}/>
            <Notes notes={notes} noteDeleteHandler={deleteFromNotes}/>  
        </div>
    )
}

export default Main
