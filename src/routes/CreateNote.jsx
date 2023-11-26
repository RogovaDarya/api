import NoteLayout from '../components/NoteLayout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreateNote() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const getRandomString = () => Math.random().toString(36).substring(2);

  const handleCreateNote = async () => {
    if (name.length === 0 || name.trim().length === 0) {
      setError('Название не может быть пустым или состоять из пробелов');
      return;
    }

    const note = {
      id: Date.now() + getRandomString(),
      userId: localStorage.getItem('userId'),
      name: name.trim(),
      description,
      date: Date.now(),
    };

    console.log(note);

    await fetch(`http://localhost:5001/notes`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
    navigate('/notes');
  };

  return (
    <NoteLayout
      header="Create new note"
      buttonName={'Create'}
      onButtonClick={handleCreateNote}
      name={name}
      setName={setName}
      description={description}
      setDescription={setDescription}
      error={error}
    />
  );
}
