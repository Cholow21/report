import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Forms from "./components/Forms/forms";
import Activity from "./components/Activity/activity";
import Conditional from "./components/Conditional/conditional";

export default function App() {
  return (
    <Router>
      <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/conditional" element={<Conditional />} />
        </Routes>
      </div>
    </Router>
  );
}
