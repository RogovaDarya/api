import { useLoaderData } from 'react-router-dom';
import { MdCreate } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NoteView() {
  const { note } = useLoaderData();
  const handleDeleteNote = () => {
    fetch(`http://localhost:5001/notes/${note?.id}`, {
      method: 'delete',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className="mx-2 flex flex-col">
      <div className="grid grid-cols-5">
        <Link to="/notes">
          <div className="bg-gray-300 max-w-min px-3 mt-2 font-semibold">
            Back
          </div>
        </Link>
        <div className="col-span-3 prose min-w-full max-w-full text-center">
          <h1>{note.name}</h1>
        </div>
        <div className="flex flex-row content-end gap-2 mt-2 ml-auto">
          <Link to={`/editnote/${note?.id}`}>
            <MdCreate />
          </Link>
          <div onClick={handleDeleteNote}>
            <FaRegTrashAlt />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-10">
        <textarea
          placeholder="Note text"
          defaultValue={note.description}
          readOnly={true}
          className="mx-auto border border-black font-serif font-semibold px-2 min-w-1/2 max-w-1/2 h-44 text-start resize-none"
        />
      </div>
    </div>
  );
}
