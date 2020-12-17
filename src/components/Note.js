import React, { useContext, useState } from 'react'
import { dispatchContext } from './Main'
import { GithubPicker } from 'react-color';

/**
 * Calculate brightness value by RGB or HEX color.
 * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
 * @returns (Number) The brightness value (dark) 0 ... 255 (light)
 */
const brightnessByColor = (color) => {
    var color = "" + color, isHEX = color.indexOf("#") === 0, isRGB = color.indexOf("rgb") === 0;
    if (isHEX) {
    const hasFullSpec = color.length === 7;
    var m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
    if (m) var r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16), g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16), b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16);
    }
    if (isRGB) {
    var m = color.match(/(\d+){3}/g);
    if (m) var r = m[0], g = m[1], b = m[2];
    }
    if (typeof r != "undefined") return ((r*299)+(g*587)+(b*114))/1000;
}

const icons = {
    delete: <i className="fa fa-times" aria-hidden="true"></i>,
    cancel: <i className="fa fa-ban" aria-hidden="true"></i>,
    save: <i className="fa fa-floppy-o" aria-hidden="true"></i>
}


function Note(props) {

    /**
     * the dispatch function of the state of 'Main' component 
     * @param {object} action
     */
    const dispatchFunction = useContext(dispatchContext)
    const [tempBody, setTempBody] = useState(props.body)
    const [tempBgColor, setTempBgColor] = useState(props.color)
    const [editMode, setEditMode] = useState(false)

    const style = {
        backgroundColor:tempBgColor,
        color:((brightnessByColor(tempBgColor)) > 150? "#2b2a2a" : "#fcfcfa"),
    }

    
    /**
     * to pass the temp state to the main state
     */
    const editSaveHandler = () => {
        dispatchFunction({type: "edit", body: tempBody, color: tempBgColor, id: props.id})
        setEditMode(false)
    }

    /**
     * to return the note to its last saved state
     */
    const editCancelHandler = () => {
        setTempBody(props.body)
        setTempBgColor(props.color)
        setEditMode(false)
    }

    /**
     * passes the chosen color to the temp. state of the note 
     * @param {string} color 
     * @param {object} event 
     */
    const handleColorChange = (color, event) => {
        setTempBgColor(color.hex)
    }


    const bodyEditable = <textarea value={tempBody} onChange={e => setTempBody(e.target.value)} className="note-textarea"></textarea> 
    const bodyReadonly = <textarea value={tempBody} onClick={() => setEditMode(true)} className="note-textarea" readOnly></textarea> 


    const deleteButton = <button onClick={() => dispatchFunction({type: "delete", id: props.id})}>{icons.delete}</button>
    //note editing mode
    const colorPicker = <GithubPicker onChangeComplete={handleColorChange}/>
    const saveButton = <button onClick={() => editSaveHandler()}>{icons.save} Save</button>
    const cancelButton = <button onClick={() => editCancelHandler()}>{icons.cancel} Cancel</button>


    return (
        <div className="note" style={style}>
            <div className="note-toolbar">
                {editMode? <>{colorPicker}{saveButton}{cancelButton}</> : <>{deleteButton}</> }
            </div>
            <div className="note-body">
                {editMode? <>{bodyEditable}</> : <>{bodyReadonly}</>}
                
            </div>
        </div>
    )
}

export default Note
