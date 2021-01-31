import { ADD, DELETE, EDIT, SYNC } from './notesTypes';

export const addNote = (newNote) => {
  return {
    type: ADD,
    payload: newNote,
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const editNote = (payload = {id: null, color: null, body: null}) => {
  return {
    type: EDIT,
    payload: payload,
  };
};

export const syncNotes = (notesFromLocalStorage) => {
  return {
    type: SYNC,
    payload: notesFromLocalStorage,
  };
};