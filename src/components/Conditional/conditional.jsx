import { useState } from "react";
import { Link } from "react-router-dom";

export default function Conditional() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCode, setSelectedCode] = useState("");

  const codeSnippets = {
    useState: `const [isVisible, setIsVisible] = useState(false);`,

    ToggleButton: `<button onClick={() => setIsVisible(!isVisible)}>
  {isVisible ? "Hide Message" : "Show Message"}
</button>`,

    ConditionalAND: `{isVisible && (
  <p>This is a conditionally rendered message.</p>
)}`,

    ConditionalTernary: `{isVisible ? (
  <p>Message is visible.</p>
) : (
  <p>Message is hidden.</p>
)}`,
  };

  const fullCode = `import { useState } from "react";

export default function Conditional() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && <p>This is a conditionally rendered message.</p>}
    </div>
  );
}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 p-4 text-gray-100 relative">
      <h2 className="text-2xl font-semibold text-orange-400 mb-4">
        Conditional Rendering
      </h2>

      <button
        onClick={() => setShowPopup(true)}
        className="absolute right-4 top-4 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors"
      >
        Show Code
      </button>

      {showPopup && (
        <div className="absolute right-0 top-0 h-full w-[36rem] bg-gray-900 border-l border-orange-600 shadow-lg p-6 overflow-y-auto z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-orange-400">
              Conditional Rendering Code
            </h3>
            <button
              onClick={() => setShowPopup(false)}
              className="text-red-500 hover:text-red-700 font-bold text-xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(codeSnippets).map((section) => (
              <button
                key={section}
                onClick={() => setSelectedCode(codeSnippets[section])}
                className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-orange-600 transition-colors text-sm"
              >
                {section}
              </button>
            ))}
            <button
              onClick={() => setSelectedCode(fullCode)}
              className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
            >
              Full Code
            </button>
          </div>

          {selectedCode ? (
            <pre className="bg-black text-white text-xs p-3 rounded-md overflow-x-auto whitespace-pre-wrap">
              {selectedCode}
            </pre>
          ) : (
            <p className="text-gray-400 text-sm">
              Click a topic or “Full Code” to view the example.
            </p>
          )}
        </div>
      )}

      <div className="bg-gray-900 border border-orange-700 rounded-xl shadow-md p-6 w-full max-w-md text-center">
        <h3 className="text-lg font-semibold text-orange-300 mb-3">
          Example Output (Preview)
        </h3>
        <p className="text-gray-400 mb-4">
          The sample below demonstrates how conditional rendering behaves when the button is toggled.
        </p>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-500 transition-colors font-semibold"
        >
          {isVisible ? "Hide Message" : "Show Message"}
        </button>

        {isVisible && (
          <p className="mt-4 text-orange-200 font-medium">
            This is a conditionally rendered message.
          </p>
        )}
      </div>

      <Link
        to="/"
        className="mt-6 text-orange-400 hover:text-white transition-colors underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
