import { useState } from "react";
import { Link } from "react-router-dom";

export default function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "Philippines",
    agree: false,
    comments: "This is a default comment.",
    interests: [],
  });

  const [showPopup, setShowPopup] = useState(false);
  const [selectedCode, setSelectedCode] = useState("");

  const codeSnippets = {
    TextInput: `<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />`,
    RadioButtons: `<label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange}/>Male</label>`,
    Checkboxes: `{["Coding","Music","Sports"].map((interest)=>(<label key={interest}><input type="checkbox" name="interests" value={interest} checked={formData.interests.includes(interest)} onChange={handleChange}/> {interest}</label>))}`,
    Textarea: `<textarea name="comments" value={formData.comments} onChange={handleChange} rows="3" />`,
    Select: `<select name="country" value={formData.country} onChange={handleChange}><option>Philippines</option><option>Japan</option><option>USA</option></select>`,
    ObjectFromEntries: `const collected = Object.fromEntries(Object.entries(formData));`,
  };

  const fullCode = `import { useState } from "react";
import { Link } from "react-router-dom";

export default function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "Philippines",
    agree: false,
    comments: "This is a default comment.",
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "interests") {
      setFormData((prev) => {
        const newInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value);
        return { ...prev, interests: newInterests };
      });
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const collected = Object.fromEntries(Object.entries(formData));
    alert(
      "Form Submitted\\n\\n" +
        Object.entries(collected)
          .map(([key, val]) => \`\${key}: \${Array.isArray(val) ? val.join(", ") : val}\`)
          .join("\\n")
    );
  };

  return (
    <form onSubmit={handleSubmit}>
    </form>
  );
};`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "interests") {
      setFormData((prev) => {
        const newInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value);
        return { ...prev, interests: newInterests };
      });
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const collected = Object.fromEntries(Object.entries(formData));

    alert(
      `Form Submitted\n\n` +
        Object.entries(collected)
          .map(([key, val]) =>
            `${key}: ${Array.isArray(val) ? val.join(", ") : val}`
          )
          .join("\n")
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900 p-4 text-gray-100 relative">
      <h2 className="text-2xl font-semibold text-orange-400 mb-4">
        Complete Form Example
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
              Form Code Examples
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
              Select a section or “Full Code” to display it.
            </p>
          )}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-orange-700 rounded-xl shadow-md p-6 w-full max-w-md flex flex-col gap-5"
      >
        <div>
          <label className="block text-sm font-medium text-orange-300 mb-1">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-orange-600 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-orange-300 mb-1">
            Gender:
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="accent-orange-500"
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="accent-orange-500"
              />
              Female
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-orange-300 mb-1">
            Country:
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-orange-600 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="Philippines">Philippines</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-orange-300 mb-1">
            Interests:
          </label>
          <div className="flex flex-wrap gap-3">
            {["Coding", "Music", "Sports"].map((interest) => (
              <label key={interest} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleChange}
                  className="accent-orange-500"
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-orange-300 mb-1">
            Comments:
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="3"
            className="w-full border border-orange-600 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="w-4 h-4 accent-orange-500"
          />
          I agree to the terms
        </label>

        <button
          type="submit"
          className="bg-orange-600 text-white py-2 rounded-md hover:bg-orange-500 transition-colors font-semibold"
        >
          Submit
        </button>
      </form>

      <Link
        to="/"
        className="mt-6 text-orange-400 hover:text-white transition-colors underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
