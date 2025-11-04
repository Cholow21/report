import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
        Forms and Conditional Rendering
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <Link
          to="/forms"
          className="bg-white rounded-2xl shadow-md flex items-center justify-center h-24 sm:h-28 md:h-32 text-blue-600 font-semibold hover:scale-105 hover:bg-blue-100 transition-all"
        >
          Forms
        </Link>

        <Link
          to="/activity"
          className="bg-white rounded-2xl shadow-md flex items-center justify-center h-24 sm:h-28 md:h-32 text-blue-600 font-semibold hover:scale-105 hover:bg-blue-100 transition-all"
        >
          Activity
        </Link>

        <Link
          to="/conditional"
          className="bg-white rounded-2xl shadow-md flex items-center justify-center h-24 sm:h-28 md:h-32 text-blue-600 font-semibold hover:scale-105 hover:bg-blue-100 transition-all"
        >
          Conditional
        </Link>
      </div>
    </div>
  );
}
