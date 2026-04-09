import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

// Dashboards
function AdminDashboard() {
  return <h2 style={{ textAlign: "center", marginTop: "50px" }}>👨‍💼 Admin Dashboard</h2>;
}

function UserDashboard() {
  return <h2 style={{ textAlign: "center", marginTop: "50px" }}>👤 User Dashboard</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;