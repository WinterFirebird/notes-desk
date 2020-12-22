import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { mainStateDispatchContext } from './Main';

const AddNoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const AddNoteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 3rem;
  color:inherit;
`;

function AddNote() {
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

  const addIcon = <Icon name="add" />;

  /**
   * attaches a unique id to a blank note defined in its state and sends to
   * Main component's dispatch function to
   */
  const onAdd = () => {
    const dateAdded = new Date();
    const addTime = dateAdded.getTime();
    mainStateDispatchFunction({ type: 'add', state: noteTemp, timeAdded: addTime });
    // the code below is to generate a new id for the next onAdd() event
    const uniqueId = Math.floor(Math.random() * (10 ** 9) + 1);
    setNoteTemp({ ...noteTemp, id: uniqueId });
  };

  return (
    <AddNoteWrapper>
      <AddNoteButton onClick={() => onAdd()}>{addIcon}</AddNoteButton>
    </AddNoteWrapper>
  );
}

export default AddNote;
