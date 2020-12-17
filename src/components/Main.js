import React, { useReducer } from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

export const dispatchContext = React.createContext()

function Main() {

    const initialState = [
        {
            id:147286491,
            body: "Welcome to NotesDesk! \n\nYou can add your own notes here by clicking on the plus icon. \nTo edit the note or change its color, simply click on it. \nHave a great experience!",
            color: "#FEF3BD",
            timeAdded: 1608212136484,
        }
    ]

    
    const reducer = (value, action={type:null, state:null, id:null, color:null, timeAdded:null}) => {
        if(action.type === "edit") {
            let newNotes = value;
            let index = value.findIndex(note => note.id === action.id);
            newNotes[index].color = action.color
            newNotes[index].body = action.body
            return [...newNotes]
        }
        if(action.type === "delete") {
            let newNotes = value.filter(note => !(note.id === action.id))
            return newNotes
        }
        if(action.type === "add") {
            let newNote = action.state
            newNote.timeAdded = action.timeAdded
            return [...value, newNote]
        }
        else {return value}
    }

    
    const [notes, dispatch] = useReducer(reducer,initialState)

    return (
        <div className="notes-grid">
            <dispatchContext.Provider value={dispatch}>
                <AddNote notes={notes}/>
                <Notes notes={notes}/>
            </dispatchContext.Provider>  
        </div>
    )
}

export default Main