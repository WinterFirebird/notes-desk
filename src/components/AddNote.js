import React, {useState, useEffect} from 'react'

function AddNote(props) {
    const [noteTemp, setNoteTemp] = useState({
        id:'',
        body:'',
        color:''
    })

    const onSubmit = e => {
        e.preventDefault()
        props.notesSubmitHandler(noteTemp)
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
