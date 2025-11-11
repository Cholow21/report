import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 text-gray-100 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-10 text-center drop-shadow-md">
        Forms and Conditional Rendering
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <Link
          to="/forms"
          className="bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center h-24 sm:h-28 md:h-32 text-white font-semibold hover:scale-105 hover:bg-orange-500 transition-all"
        >
          Forms
        </Link>

        <Link
          to="/activity"
          className="bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center h-24 sm:h-28 md:h-32 text-white font-semibold hover:scale-105 hover:bg-orange-500 transition-all"
        >
          Activity
        </Link>

        <Link
          to="/conditional"
          className="bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center h-24 sm:h-28 md:h-32 text-white font-semibold hover:scale-105 hover:bg-orange-500 transition-all"
        >
          Conditional
        </Link>
      </div>
    </div>
  );
}
