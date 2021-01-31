import React from 'react';
import Note from './Note';

const Notes = ({ notes }) => {
  // to sort the notes by descending order
  const notesSorted = notes.sort((a, b) => b.timeAdded - a.timeAdded);

  const notesJSX = notesSorted.map((note) => {
    return <Note body={note.body} color={note.color} id={note.id} key={note.id} />;
  });

  return (
    <>
      {notesJSX}
    </>
  );
}

export default Notes;
