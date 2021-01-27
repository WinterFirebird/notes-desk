import React, { useState, useContext, useCallback } from 'react';
import { mainStateDispatchContext } from './Main';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const AddNoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  button {
    background: none;
    border: none;
    outline: none;
    font-size: 3rem;
    color: inherit;
  }
`;

const blankNoteTemplate = {
  id: '',
  body: '',
  color: '#FEF3BD',
  timeAdded: '',
};

const AddNote = (props) => {
  /**
   * the dispatch function of the state of 'Main' component
   * @param {object} action
   */
  const mainStateDispatchFunction = useContext(mainStateDispatchContext);

  /**
   * attaches a unique id and a timestamp to a blank note and sends to
   * Main component's dispatch function
   */
  const onAdd = useCallback(() => {
    let newBlankNote = blankNoteTemplate;
    const uniqueId = Math.floor(Math.random() * (10**8));
    const addTime = new Date().getTime();
    newBlankNote.id = uniqueId;
    newBlankNote.timeAdded = addTime;
    mainStateDispatchFunction({ type: 'add', newNote: newBlankNote});
  }, []);

  return (
    <AddNoteWrapper>
      <button onClick={() => onAdd()}>
        <Icon name='add' />
      </button>
    </AddNoteWrapper>
  );
}

export default AddNote;
