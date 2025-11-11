import { Link } from "react-router-dom";

export default function SimpleUserFormActivity() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 text-gray-100 p-6">
      <h1 className="text-3xl font-bold text-orange-400 mb-4 text-center">
        Form Creation Activity
      </h1>
      <p className="text-gray-300 text-lg text-center max-w-xl">
        Create a form that includes <b>radio buttons</b>, <b>checkboxes</b>, and uses
        <b> conditional rendering</b> to show or hide content based on user input.
      </p>

      <Link
        to="/"
        className="mt-8 text-orange-400 hover:text-white transition-colors underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}