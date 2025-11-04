import { useState } from "react";
import { Link } from "react-router-dom";

export default function Activity() {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4 text-gray-800">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Student Activity</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-blue-200 rounded-xl shadow-sm p-6 flex flex-col gap-4 w-full max-w-md"
      >
        <label className="block text-sm font-medium text-gray-600">
          Enter a message:
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Show Result
        </button>
      </form>

      {showResult && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-center">
          <p className="text-gray-700">
            You typed:{" "}
            <span className="font-semibold text-blue-600">{input}</span>
          </p>
        </div>
      )}

      {/* Back to Home */}
      <Link
        to="/"
        className="mt-6 text-blue-600 hover:text-blue-800 transition-colors underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
