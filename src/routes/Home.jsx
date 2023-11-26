import { useContext } from 'react';
import { UserContext } from '../components/UserContextProvider';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { user } = useContext(UserContext);
  const date = new Date(user?.registrationDate)
    .toJSON()
    .slice(0, 19)
    .replace('T', ' ')
    .replaceAll('-', '.');

  const navigate = useNavigate();

  return (
    <div className="prose text-center min-w-full max-w-full">
      <h1>About me</h1>
      <div className="flex flex-col">
        <div>
          <span className="font-bold">Email: </span>
          {user?.email}
        </div>
        <div>
          <span className="font-bold">Date sign up: </span>
          {date}
        </div>
      </div>
      <button
        className="bg-gray-300 py-1 px-4 mt-10 font-semibold font-serif"
        onClick={() => navigate('/notes')}
      >
        Go to notes
      </button>
    </div>
  );
}
