import React, {useReducer, useEffect} from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

export const dispatchContext = React.createContext()

function Main() {
    console.log("Main - rendering")

    const initialState = [
        {
            id:147286491,
            body: "Welcome to Sticky Notes! You can add your own notes here :)",
            color: "#FEF3BD"
        }
    ]

    
    const reducer = (value, action={type:null, state:null, id:null, color:null}) => {
        if(action.type === "edit") {
            let newNotes = value;
            let index = value.findIndex(note => note.id == action.id);
            console.log(index)
            newNotes[index].color = action.color
            newNotes[index].body = action.body
            return [...newNotes]
        }
        if(action.type === "delete") {
            let newNotes = value.filter(note => !(note.id === action.id))
            return newNotes
        }
        if(action.type === "add") {
            let uniqueId = Math.floor(Math.random() * Math.pow(10, 9)) + 1
            let readyNewNote = action.state
            readyNewNote.id = uniqueId
            console.log(`Value of the state: `)
            console.log(value)
            console.log(`Value to be returned: `)
            console.log([...value, readyNewNote])
            return ([...value, readyNewNote])
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