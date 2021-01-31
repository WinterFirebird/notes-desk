import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import notesReducer from './notesReducer';

const notesStore = createStore(notesReducer, composeWithDevTools(applyMiddleware()));

export default notesStore;
