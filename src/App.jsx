import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import RequireAuth from "./context/RequireAuth";
import UserProfileDetails from "./components/Generic/UserProfileDetails";
import AdminLayout from "./components/admin/Dashboard/index";
import ChangePassword from "./components/auth/ChangePassword";
import Results from "./components/admin/Questions/Results";
import Paypal from "./components/Generic/Paypal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/resetPassword" element={<ForgotPassword />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<AppLayout />} />
          <Route path="/paypal" element={<Paypal />} />
          <Route path="/userDetails" element={<UserProfileDetails />} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/results" element={<Results />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
