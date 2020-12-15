import React from 'react'

function Note(props) {
    const style = {
        backgroundColor:props.color,
        color:"black"
    }
    return (
        <div className="note" style={style}>
            <div className="note-body">
                <p>{props.body}</p>
            </div>
            <div className="note-toolbar">
                <p>Its color is {props.color}</p>
                {/* <ColorChanger /> */}
                
                <button onClick={() => props.deleteNote(props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Note
