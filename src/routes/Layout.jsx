import { Outlet, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../components/UserContextProvider';

export default function Layout() {
  const { user } = useContext(UserContext);

  return (
    <div className='flex flex-col min-h-screen border'>
      <header className="flex flex-row gap-5 font-sans font-semibold justify-between mx-2 text-gray-500 text-xs mt-2 mb-2 sm:text-xl">
        <div>
          <h1 className="text-black">Hello, {user?.email}</h1>
        </div>
        <div className="flex flex-row gap-5">
          <NavLink
            to="/"
            end={true}
            className={({ isActive }) =>
              isActive ? 'text-black font-extrabold' : ''
            }
          >
            About
          </NavLink>
          <NavLink
            to="/notes"
            end={true}
            className={({ isActive }) =>
              isActive ? 'text-black font-extrabold' : ''
            }
          >
            Notes
          </NavLink>
          <NavLink
            to="/login"
            end={true}
            className={({ isActive }) =>
              isActive ? 'text-black font-extrabold' : ''
            }
            onClick={() => localStorage.removeItem('userId')}
          >
            Log out
          </NavLink>
        </div>
      </header>

      <main style={{flex: '1 1 auto'}}>
        <Outlet />
      </main>

      <footer
        className="flex mx-2 font-sans font-medium border-t-2 border-black mt-10 mb-4 pt-4"
        style={{
          justifyContent: 'space-between',
        }}
      >
        <div>Created by: Rogova Darya</div>
        <div>BSU 2023</div>
      </footer>
    </div>
  );
}
