import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
