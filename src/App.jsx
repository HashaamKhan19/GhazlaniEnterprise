import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import RequireAuth from "./context/RequireAuth";
import UserProfileDetails from "./components/Generic/UserProfileDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/resetPassword" element={<ForgotPassword />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<AppLayout />} />
          <Route path="/userDetails" element={<UserProfileDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
