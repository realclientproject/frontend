import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';

import Admin from "./pages/dashboard/admin/admin.jsx";
import Help from "./pages/help/help.jsx";
import Login from "./pages/login/login.jsx";
import Lesson from "./pages/lessons/lessons.jsx";
import Policy from "./pages/policies/policies.jsx";
import SuperAdmin from "./pages/dashboard/superadmin/superadmin.jsx";
import Profile from "./pages/profile/profile.jsx";
import Home from "./pages/home/home.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Quizze from "./pages/quizzes/quizzes.jsx";
import AdminLogin from "./pages/login/adminlogin.jsx";
import { useAuthContext } from "./hooks/useAuthContext";
const AllRoutes = () => {
  const { user } = useAuthContext();
	return (
	<Router>
         <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/help" element={<Help />}></Route>
          <Route exact path="/dashboard" element={<Admin />}></Route>
          <Route exact path="/SuperAdmin" element={<SuperAdmin />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/policies" element={<Policy />}></Route>
          <Route exact path="/lessons" element={<Lesson />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/adminpanel" element={<AdminLogin />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/quizzes" element={<Quizze />}></Route>
        </Routes>
      </Router>
	);
};

export default AllRoutes;
