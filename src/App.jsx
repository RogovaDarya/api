import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import UserContextProvider from "./components/UserContextProvider";
import RequireAuth from "./components/RequireAuth";
import SignUp from "./routes/SignUp";
import Layout from "./routes/Layout";
import ErrorPage from "./routes/ErrorPage";
import { notesLoader, noteLoader } from "./utils/notesLoader";
import Notes from "./routes/Notes";
import CreateNote from "./routes/CreateNote";
import EditNote from "./routes/EditNote";
import NoteView from "./routes/NoteView";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notes",
        loader: notesLoader,
        element: <Notes />,
      },
      {
        path: "createnote",
        element: <CreateNote />,
      },
      {
        path: "/editnote/:id",
        loader: noteLoader,
        element: <EditNote />,
      },
      {
        path: "/notes/:id",
        loader: noteLoader,
        element: <NoteView />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
