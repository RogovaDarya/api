export const notesLoader = async () => {
  const notes = [];
  await fetch(`http://localhost:5001/notes`)
    .then((r) => r.json())
    .then((note) => {
      if (note.length !== 0) {
        note.forEach((element) => {
          if (element?.userId === localStorage.getItem('userId'))
            notes.push(element);
        });
      }
    });

  return { notes };
};

export const noteLoader = async ({ params: { id } }) => {
  const note = await fetch(`http://localhost:5001/notes/${id}`).then((r) =>
    r.json()
  );

  return { note };
};
