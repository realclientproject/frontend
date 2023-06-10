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
import SuperAdmin from "./pages/dashboard/superadmin/admin.jsx";
import Home from "./pages/home/home.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Quizze from "./pages/quizzes/quizzes.jsx";
import AdminLogin from "./pages/login/adminlogin.jsx";
import NotFoundPage from "./pages/404page/404.jsx";
import TableContent from "./pages/dashboard/superadmin/admin.jsx";
import ResourcesTables from "./components/resourcesTable.jsx/resourcesTable.jsx";
import { useAuthContext } from "./hooks/useAuthContext";
import PrivateSuperAdmin from "./utils/pivateroute.jsx";
import PrivateAdmin from "./utils/adminroute.jsx";
import RequireAuth from "./utils/requireAuth.jsx";
import Payment from "./pages/payment/payment.jsx";
const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/help" element={<Help />}></Route>
        <Route element={<PrivateAdmin />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route element={<PrivateSuperAdmin />}>
          <Route path="/superadmin" element={<SuperAdmin />} />
        </Route>

        <Route exact path="/policies" element={<Policy />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/adminpanel" element={<AdminLogin />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route element={<RequireAuth />}>
          <Route exact path="/quizzes" element={<Quizze />}></Route>
          <Route exact path="/lessons" element={<Lesson />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
