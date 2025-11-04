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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox group (interests)
    if (type === "checkbox" && name === "interests") {
      setFormData((prev) => {
        const newInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value);
        return { ...prev, interests: newInterests };
      });
    } 
    // Handle single checkbox (agree)
    else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } 
    else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use Object.fromEntries to cleanly gather form data
    const formEntries = Object.entries(formData);
    const collected = Object.fromEntries(formEntries);

    alert(
      `Form Submitted ✅\n\n` +
      Object.entries(collected)
        .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(", ") : val}`)
        .join("\n")
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 text-gray-800">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Complete Form Example
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-blue-200 rounded-xl shadow-md p-6 w-full max-w-md flex flex-col gap-5"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Gender (Radio Buttons) */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
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
                className="accent-blue-500"
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
                className="accent-pink-500"
              />
              Female
            </label>
          </div>
        </div>

        {/* Country (Select Dropdown) */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Country:
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="Philippines">Philippines</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        {/* Interests (Multiple Checkboxes) */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Interests:
          </label>
          <div className="flex flex-wrap gap-3">
            {["Coding", "Music", "Sports", "Travel"].map((interest) => (
              <label key={interest} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        {/* Comments (Textarea with default value) */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Comments:
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          />
        </div>

        {/* Agreement Checkbox */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="w-4 h-4 accent-green-500"
          />
          <span className="text-sm text-gray-600">I agree to the terms</span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>

      {/* Back Link */}
      <Link
        to="/"
        className="mt-6 text-blue-600 hover:text-blue-800 transition-colors underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
