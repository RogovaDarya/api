export const notesLoader = async () => {
  const notes = [];
  await fetch(`https://gttpxm-5001.csb.app/notes`)
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
  const note = await fetch(`https://gttpxm-5001.csb.app/notes/${id}`).then((r) =>
    r.json()
  );

  return { note };
};
