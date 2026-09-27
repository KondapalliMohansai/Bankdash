import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          404
        </h1>

        <p className="mt-3 text-slate-500">
          Page not found.
        </p>

        <Link
          to="/"
          className="mt-5 inline-block rounded-lg bg-[#1f3c88] px-5 py-3 text-white"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;