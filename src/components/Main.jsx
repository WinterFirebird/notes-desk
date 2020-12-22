import React, { useReducer } from 'react';
import styled from 'styled-components';
import Notes from './Notes';
import AddNote from './AddNote';

export const mainStateDispatchContext = React.createContext();

const NotesGrid = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    display: grid;
    grid-gap:20px;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-auto-rows: minmax(100px, 300px);
    justify-content: center;

    @media screen and (max-width: 480px) {
        grid-template-columns: 250px;
        grid-template-rows: 100px;
        grid-auto-rows: 250px;
    }
`;

function Main() {
  const initialState = [
    {
      id: 147286491,
      body: 'Welcome to NotesDesk! \n\nYou can add your own notes here by clicking on the plus icon. \nTo edit the note or change its color, simply click on it. \nHave a great experience!',
      color: '#FEF3BD',
      timeAdded: 1608212136484,
    },
  ];

  const mainStateReducer = (value, action = {
    type: null, state: null, id: null, color: null, timeAdded: null,
  }) => {
    if (action.type === 'edit') {
      const newNotes = value;
      const index = value.findIndex((note) => note.id === action.id);

      if (index !== -1) {
        newNotes[index].color = action.color;
        newNotes[index].body = action.body;
      }

      return [...newNotes];
    }

    if (action.type === 'delete') {
      const newNotes = value.filter((note) => !(note.id === action.id));
      return newNotes;
    }

    if (action.type === 'add') {
      const newNote = action.state;
      newNote.timeAdded = action.timeAdded;
      return [...value, newNote];
    }
    else { return value; }
  };

  const [notes, notesDispatch] = useReducer(mainStateReducer, initialState);

  return (
    <NotesGrid>
      <mainStateDispatchContext.Provider value={notesDispatch}>
        <AddNote notes={notes} />
        <Notes notes={notes} />
      </mainStateDispatchContext.Provider>
    </NotesGrid>
  );
}

export default Main;
