import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { syncNotes } from '../redux';
import styled from 'styled-components';
import Notes from './Notes';
import AddNote from './AddNote';


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

// gets displayed if it's the first visit 
const startingNote = {
  notes: [{
    id: 1,
    body: 'Welcome to NotesDesk! \n\nYou can add your own notes here by clicking on the plus icon. \nTo edit the note or change its color, simply click on it. \nHave a great experience!',
    color: '#FEF3BD',
    timeAdded: 1,
  }]
};

const Main = ({ notes, syncNotes }) => {

  const updateStateFromLocalStorage = () => {
    let notesFromLocalStorage = [startingNote];
    try {
      let notes = window.localStorage.notes;
      if (notes) {
        notesFromLocalStorage = JSON.parse(notes);
      }
    } finally {
      syncNotes(notesFromLocalStorage);
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
        <AddNote notes={notes} />
        <Notes notes={notes} />
    </NotesGrid>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    syncNotes: (notesFromLocalStorage) => dispatch(syncNotes(notesFromLocalStorage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
