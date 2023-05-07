import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

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
import NotFoundPage from "./pages/404page/404.jsx";
import TableContent from "./pages/dashboard/admin/admin.jsx";
import ResourcesTables from './components/resourcesTable.jsx/resourcesTable.jsx';import { useAuthContext } from "./hooks/useAuthContext";
import PrivateSuperAdmin from "./utils/pivateroute.jsx";
import PrivateAdmin from "./utils/adminroute.jsx";
import RequireAuth from "./utils/requireAuth.jsx";
import Layout from "./components/layout/layout.jsx";
import DashboardLayout from "./components/layout/dashboardLayout.jsx";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route exact path="/home" element={<Layout><Home /></Layout>}></Route>
        <Route exact path="/help" element={<Layout><Help /></Layout>}></Route>
        <Route exact path="/policies" element={<Layout><Policy /></Layout>}></Route>
        <Route element={<PrivateAdmin />}>
          <Route path="/admin" element={<DashboardLayout><Admin /></DashboardLayout>} />
        </Route>
        <Route element={<PrivateSuperAdmin />}>
          <Route path="/superadmin" element={<DashboardLayout><SuperAdmin /></DashboardLayout>} />
        </Route>

        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/adminpanel" element={<AdminLogin />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route element={<RequireAuth />}>
          <Route exact path="/quizzes" element={<Layout><Quizze /></Layout>}></Route>
          <Route exact path="/lessons" element={<Layout><Lesson /></Layout>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
