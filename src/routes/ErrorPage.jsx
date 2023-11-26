import { Suspense } from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col text-center mt-20">
        <div>
          <h1 className="font-bold text-3xl font-mono">404</h1>
          <h1 className="font-bold text-4xl font-mono">Page not found</h1>
        </div>
        <div className="font-bold text-gray-500 font-mono">
          Go{" "}
          <Link to={'/'} className="font-bold text-black underline">
            Home
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
