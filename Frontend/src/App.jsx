
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

