import { Link } from 'react-router-dom';

export default function NoteLayout({
  noteId,
  header,
  name,
  description,
  setName,
  setDescription,
  buttonName,
  onButtonClick,
  error,
}) {
  return (
    <div className="mx-2 flex flex-col">
      <div className="grid grid-cols-5">
        <Link to="/notes">
          <div className="bg-gray-300 max-w-min px-3 mt-2 font-semibold">
            Back
          </div>
        </Link>
        <div className="col-span-3 prose min-w-full max-w-full text-center">
          <h1>{header}</h1>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col gap-2 mt-10">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mx-auto border border-black font-serif font-semibold px-2 min-w-1/2 max-w-1/2"
        />
        {error && (
          <div className="text-red-500 font-semibold font-serif text-xs sm:text-sm text-center">
            {error}
          </div>
        )}
        <textarea
          placeholder="Note text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mx-auto border border-black font-serif font-semibold px-2 min-w-1/2 max-w-1/2 h-44 text-start resize-none"
        />
      </div>

      <button
        className="border min-w-1/5 mx-auto max-w-1/5 cursor-pointer font-bold text-xl border-black hover:bg-gray-200 my-5"
        onClick={onButtonClick}
      >
        {buttonName}
      </button>
    </div>
  );
}
