import { useState } from "react";
import { Link } from "react-router-dom";

export default function Conditional() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 border border-blue-100">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          Conditional Rendering
        </h2>

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          {isVisible ? "Hide Message" : "Show Message"}
        </button>

        {isVisible && (
          <p className="mt-4 text-center text-gray-700">
            🎉 This is a conditionally rendered message!
          </p>
        )}
      </div>

      <Link to="/" className="mt-6 text-blue-600 hover:underline font-medium">
        ← Back to Home
      </Link>
    </div>
  );
}
