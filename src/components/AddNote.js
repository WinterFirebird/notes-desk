import React, {useState, useContext} from 'react'
import {dispatchContext} from './Main'


function AddNote(props) {
    // console.log(dispatchContext)
    const dispatchFunction = useContext(dispatchContext)

    const [noteTemp, setNoteTemp] = useState({
        id:'',
        body:'',
        color:''
    })

    const onSubmit = e => {
        e.preventDefault()
        dispatchFunction({type:"add", state: noteTemp})
        setNoteTemp({id:'',body:'',color:''})
    }

    return (
        <div className="addNote">
            <form onSubmit={onSubmit}>
                <textarea value={noteTemp.body} onChange={e => setNoteTemp({...noteTemp, body: e.target.value})} ></textarea>
                <input value={noteTemp.color} onChange={e => setNoteTemp({...noteTemp, color: e.target.value})} type="color" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddNote
