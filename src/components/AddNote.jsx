import React, { useState, useContext, useCallback } from 'react';
import { mainStateDispatchContext } from './Main';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const AddNoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`;

const AddNoteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 3rem;
  color: inherit;
`;

const AddNote = (props) => {
  /**
   * the dispatch function of the state of 'Main' component
   * @param {object} action
   */
  const mainStateDispatchFunction = useContext(mainStateDispatchContext);

  const [noteTemp, setNoteTemp] = useState({
    id: '',
    body: '',
    color: '#FEF3BD',
    timeAdded: '',
  });

  const addIcon = <Icon name='add' />;

  /**
   * attaches a unique id to a blank note defined in its state and sends to
   * Main component's dispatch function to
   */
  const onAdd = useCallback(() => {
    // const dateAdded = new Date();
    const addTime = new Date().getTime();
    mainStateDispatchFunction({ type: 'add', newNote: noteTemp, timeAdded: addTime });
    // the code below is to generate a new id for the next onAdd() event
    const uniqueId = new Date().getUTCMilliseconds();
    setNoteTemp({ ...noteTemp, id: uniqueId });
  });

  return (
    <AddNoteWrapper>
      <AddNoteButton onClick={() => onAdd()}>{addIcon}</AddNoteButton>
    </AddNoteWrapper>
  );
}

export default AddNote;
