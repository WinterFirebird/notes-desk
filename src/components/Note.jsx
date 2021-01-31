import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { editNote, deleteNote } from '../redux';
import brightnessByColor from './brightnessByColor';
import styled from 'styled-components';
import { GithubPicker } from 'react-color';
import { Icon } from 'semantic-ui-react';

const icons = {
  delete: <Icon name='delete' />,
  cancel: <Icon name='ban' />,
  save: <Icon name='save' />,
};

const NoteWrapper = styled.div`
  border: 1px solid;
  border-bottom-right-radius: 16px;
  display: flex;
  flex-direction: column;
  button {
      background: none;
      border: none;
      outline: none;
  }
`;

const NoteToolbar = styled.div`
  background-color: rgba(256,256,256,0.7);
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NoteBody = styled.div`
  flex-grow: 1;
  padding: 10px;
  textarea {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    color: inherit;
    padding: 10px 5px;
    resize: none;
    font-size: 1rem;
    font-family: inherit;
  }
}
`;

const Note = (props) => {
  // functions for dispatching a delete or edit action
  const { editNote, deleteNote } = props;

  // temprorary values of the note
  const [tempBody, setTempBody] = useState(props.body);
  const [tempBgColor, setTempBgColor] = useState(props.color);
  const [editMode, setEditMode] = useState(false);

  // styles of the note
  const style = {
    backgroundColor: tempBgColor,
    color: ((brightnessByColor(tempBgColor)) > 150 ? '#2b2a2a' : '#fcfcfa'),
  };

  /**
   * to pass the temp state to the redux store
   */
  const editSaveHandler = useCallback(() => {
    editNote({
      body: tempBody,
      color: tempBgColor,
      id: props.id,
    });
    setEditMode(false);
  }, [tempBody, tempBgColor, editMode]);

  /**
   * to return the note to its last saved state
   */
  const editCancelHandler = useCallback(() => {
    setTempBody(props.body);
    setTempBgColor(props.color);
    setEditMode(false);
  }, [tempBody, tempBgColor, editMode]);

  /**
   * passes the chosen color to the temp state of the note
   * @param {string} color
   * @param {object} event
   */
  const handleColorChange = useCallback((color, event) => {
    setTempBgColor(color.hex);
  }, [tempBody, tempBgColor, editMode]);


  const deleteButton = <button onClick={ () => deleteNote(props.id)}>{ icons.delete }</button>;
  // the editable textarea displayed when user clicks on the note
  const bodyEditable = <textarea value={tempBody} onChange={e => setTempBody(e.target.value)}></textarea>;
  // the read-only textarea displayed when user isn't editing the note
  const bodyReadonly = <textarea value={tempBody} onClick={() => setEditMode(true)} readOnly></textarea>;
  // note editing mode
  const colorPicker = <GithubPicker onChangeComplete={handleColorChange}/>;
  const saveButton = <button onClick={() => editSaveHandler()}>{icons.save} Save</button>;
  const cancelButton = <button onClick={() => editCancelHandler()}>{icons.cancel} Cancel</button>;
  return (
    <NoteWrapper style={style}>
      <NoteToolbar>
        {editMode ? <> {colorPicker} {saveButton} {cancelButton}</> : <>{deleteButton}</> }
      </NoteToolbar>
      <NoteBody>
        {editMode ? <>{bodyEditable}</> : <>{bodyReadonly}</>}
      </NoteBody>
    </NoteWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    editNote: (payload = {id: null, color: null, body: null}) => dispatch(editNote(payload)),
    deleteNote: (id) => dispatch(deleteNote(id)),
  }
};

export default React.memo(connect(null, mapDispatchToProps)(Note)); 
