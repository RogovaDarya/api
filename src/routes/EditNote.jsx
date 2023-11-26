import NoteLayout from '../components/NoteLayout';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function EditNote() {
  const { note } = useLoaderData();
  console.log(note);
  const [name, setName] = useState(note?.name);
  const [description, setDescription] = useState(note?.description);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleEditNote = async () => {
    if (name.length === 0 || name.trim().length === 0) {
      setError('Название не может быть пустым или состоять из пробелов');
      return;
    }

    const newNote = {
      id: note.id,
      userId: note.userId,
      name,
      description,
      date: note.date,
    };

    console.log(newNote);

    await fetch(`http://localhost:5001/notes/${note?.id}`, {
      method: 'delete',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });

    await fetch(`http://localhost:5001/notes`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    });

    navigate('/notes');
  };

  return (
    <NoteLayout
      header="Edit note"
      buttonName={'Save'}
      onButtonClick={handleEditNote}
      name={name}
      setName={setName}
      description={description}
      setDescription={setDescription}
      error={error}
    />
  );
}
