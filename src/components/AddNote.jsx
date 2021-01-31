import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../redux';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Wrapper = styled.div`
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
  // function for dispatching an adding a note action
  const { addNote } = props;

  /**
   * attaches a unique id and a timestamp to a blank note and sends to
   * Main component's dispatch function
   */
  const onAdd = useCallback(() => {
    let newBlankNote = blankNoteTemplate;
    newBlankNote.id = Math.floor(Math.random() * (10**8));
    newBlankNote.timeAdded = new Date().getTime();
    addNote(newBlankNote);
  }, []);

  return (
    <Wrapper>
      <button onClick={() => onAdd()}>
        <Icon name='add' />
      </button>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: (newNote) => dispatch(addNote(newNote)),
  };
};

export default connect(null, mapDispatchToProps)(AddNote);
