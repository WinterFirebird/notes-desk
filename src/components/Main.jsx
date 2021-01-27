import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import Notes from './Notes';
import AddNote from './AddNote';

export const mainStateDispatchContext = React.createContext();

const NotesGrid = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: minmax(100px, 300px);
  justify-content: center;

  @media screen and (max-width: 420px) {
    grid-template-columns: 250px;
    grid-template-rows: 100px;
    grid-auto-rows: 250px;
  }
`;

const initialState = [
];

// gets displayed if it's the first visit 
const startingNote = {
  id: 1,
  body: 'Welcome to NotesDesk! \n\nYou can add your own notes here by clicking on the plus icon. \nTo edit the note or change its color, simply click on it. \nHave a great experience!',
  color: '#FEF3BD',
  timeAdded: 1,
};

const Main = (props) => {

  const mainStateReducer = (state, action = {
    type: null, newNote: null, id: null, color: null, stateFromLocalStorage: null,
  }) => {
    if (action.type === 'edit') {
      const newNotes = state;
      const index = state.findIndex((note) => note.id === action.id);

      if (index !== -1) {
        newNotes[index].color = action.color;
        newNotes[index].body = action.body;
      }
      return [...newNotes];
    }

    if (action.type === 'delete') {
      const newNotes = state.filter((note) => !(note.id === action.id));
      return newNotes;
    }

    if (action.type === 'add') {
      const newNote = action.newNote;
      return [...state, Object.assign({}, newNote)];
    }

    if (action.type === 'sync') {
      return action.stateFromLocalStorage;
    }

    else { return state; }
  };

  const [notes, notesDispatch] = useReducer(mainStateReducer, initialState);

  const updateStateFromLocalStorage = () => {
    let notesFromLocalStorage = [startingNote];
    try {
      let notes = window.localStorage.notes;
      if (notes) {
        notesFromLocalStorage = JSON.parse(notes);
      }
    } finally {
      notesDispatch({type: 'sync', stateFromLocalStorage: notesFromLocalStorage});
    }
  };

  const updateLocalStorageFromState = () => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  };

  // get user data from local storage on component mount
  useEffect(() => {
    updateStateFromLocalStorage();
  }, []);

  useEffect(() => {
    updateLocalStorageFromState();
  }, [notes]);

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
