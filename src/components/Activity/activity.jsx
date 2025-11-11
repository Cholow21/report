import { useState } from "react";
import { Link } from "react-router-dom";

export default function SimpleUserFormActivity() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCode, setSelectedCode] = useState("");

  // Code snippets for guide popup
  const codeSnippets = {
    BasicStructure: `// ✏️ EDIT HERE
import { useState } from "react";

export default function SimpleUserForm() {
  const [name, setName] = useState(""); // controlled component
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // ✏️ update name
            placeholder="Enter your name"
          />
          <input type="email" placeholder="Enter your email" /> {/* ✏️ Add state if needed */}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>Welcome, {name || "Guest"}!</h2>
      )}
    </div>
  );
}
`,
    ConditionalRendering: `// ✏️ EDIT HERE
// useState controls whether the form or the message shows.
const [submitted, setSubmitted] = useState(false);

// Conditional Rendering
return (
  <div>
    {!submitted ? (
      <form onSubmit={handleSubmit}>/* ✏️ Your form here */</form>
    ) : (
      <h2>Welcome, {name}!</h2>
    )}
  </div>
);`,
    ControlledComponents: `// ✏️ EDIT HERE
// Controlled components mean React controls the input's value.

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)} // React keeps this in sync
  placeholder="Enter your name"
/>;`,
    FullCode: `// ✏️ You can copy and modify this in your VS Code editor.
import { useState } from "react";

export default function SimpleUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)} // ✏️ EDIT HERE
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // ✏️ EDIT HERE
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>Welcome, {name || "Guest"}!</h2>
      )}
    </div>
  );
}`,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 text-gray-100 p-6 relative">
      <h1 className="text-3xl font-bold text-orange-400 mb-2">
        Beginner: Basic Form Handling
      </h1>
      <p className="text-gray-300 mb-6 text-center max-w-lg">
        Your task is to create a simple user form with inputs for <b>name</b> and <b>email</b>.
        When the user submits, display a greeting message using their name.
        You will learn about <b>controlled components</b> and <b>conditional rendering</b>.
      </p>

      <button
        onClick={() => setShowPopup(true)}
        className="bg-orange-600 px-6 py-3 rounded-lg font-semibold text-white hover:bg-orange-500 transition"
      >
        Show Code Guide 💡
      </button>

      {/* Popup Code Guide */}
      {showPopup && (
        <div className="absolute right-0 top-0 h-full w-[36rem] bg-gray-900 border-l border-orange-600 shadow-lg p-6 overflow-y-auto z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-orange-400">
              Code Reference Guide
            </h3>
            <button
              onClick={() => setShowPopup(false)}
              className="text-red-500 hover:text-red-700 font-bold text-xl"
            >
              ×
            </button>
          </div>

          <p className="text-gray-400 text-sm mb-4">
            👇 Click a section below to view example code. Edit it inside your VS Code project where marked with <code>// ✏️ EDIT HERE</code>.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(codeSnippets).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCode(codeSnippets[key])}
                className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-orange-600 transition-colors text-sm"
              >
                {key}
              </button>
            ))}
          </div>

          {selectedCode ? (
            <pre className="bg-black text-white text-xs p-3 rounded-md overflow-x-auto whitespace-pre-wrap">
              {selectedCode}
            </pre>
          ) : (
            <p className="text-gray-500 text-sm">
              👆 Select a section to view its code.
            </p>
          )}
        </div>
      )}

      {/* Visual Placeholder for Expected Output */}
      <div className="mt-10 bg-gray-900 border border-orange-700 rounded-xl shadow-md p-8 w-full max-w-md text-center">
        <h2 className="text-xl font-semibold text-orange-300 mb-4">
          Expected Output Preview
        </h2>
        <p className="text-gray-400 mb-6">
          After completing the activity, your form should look and behave like this.
        </p>
        <button className="bg-orange-600 px-5 py-2 rounded-md text-white font-semibold hover:bg-orange-500 transition">
          Forms Activity (Preview)
        </button>
      </div>

      {/* Back to Home */}
      <Link
        to="/"
        className="mt-8 text-orange-400 hover:text-white transition-colors underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
