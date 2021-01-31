import { ADD, DELETE, EDIT, SYNC } from './notesTypes';

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      const newNote = action.payload;
      return {
        notes: [...state.notes, Object.assign({}, newNote)], 
      };
    case DELETE:
      const idToDelete = action.payload;
      const notesUpdated = state.notes.filter((note) => !(note.id === idToDelete));
      return {
        notes: notesUpdated,
      };
    case EDIT:
      const { id, color, body } = action.payload;
      let newNotesEdited = state.notes;
      let index = state.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        newNotesEdited[index].color = color;
        newNotesEdited[index].body = body;
      }
      return {
        notes: [...newNotesEdited],
      };
    case SYNC:
      const notesFromLocalStorage = action.payload;
      return {
        notes: notesFromLocalStorage,
      };
    default: return state;
  }
};

export default notesReducer;
