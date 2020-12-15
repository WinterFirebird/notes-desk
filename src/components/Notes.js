import React from 'react'
import Note from './Note'

function Notes(props) {
    const notes = props.notes
    const notesJSX = notes.map((note) => {
        return <Note body={note.body} color={note.color} id={note.id} key={note.id} deleteNote={props.noteDeleteHandler}/>
    })

    return (
        <>
            {notesJSX}
        </>
    )
}

export default Notes
