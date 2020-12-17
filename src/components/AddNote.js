import React, { useState, useContext } from 'react'
import { dispatchContext } from './Main'


function AddNote() {
    /**
     * the dispatch function of the state of 'Main' component 
     * @param {object} action
     */
    const dispatchFunction = useContext(dispatchContext)

    const [noteTemp, setNoteTemp] = useState({
        id:'',
        body:'',
        color:'#FEF3BD',
        timeAdded:''
    })

    const addIcon = <i className="fa fa-plus-circle" aria-hidden="true"></i>
    
    /**
     * attaches a unique id to a blank note defined in its state and sends to Main component's dispatch function to
     */
    const onAdd = () => {
        let d = new Date()
        let timeAdded = d.getTime()
        dispatchFunction({type:"add", state: noteTemp, timeAdded: timeAdded})
        //the code below is to generate a new id for the next onAdd() event
        let uniqueId = Math.floor(Math.random() * Math.pow(10, 9)) + 1
        setNoteTemp({...noteTemp, id: uniqueId})
    }


    return (
        <div className="addNote">
            <button onClick={() => onAdd()}>{addIcon}</button>
        </div>
    )
}

export default AddNote
