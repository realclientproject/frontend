import { Routes, Route } from "react-router-dom";

// import components
import Admin from "./pages/dashboard/admin/admin.jsx";
import Help from "./pages/help/help.jsx";
import Login from "./pages/login/login.jsx";
import Policy from "./pages/policies/policies.jsx";
import SuperAdmin from "./pages/dashboard/superadmin/superadmin.jsx";
import Profile from "./pages/profile/profile.jsx";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <h1>sidebar</h1>
        </div>
        <div className="App-container">
          <Route path="/" element={<Login />} />

          <Route exact path="/admin" element={<Admin />} />
          <Route path="/superadmin" element={<SuperAdmin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/help" element={<Help />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/profile" element={<Profile />} />
        </div>
      </div>
    </>
  );
}

export default App;
