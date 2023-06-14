import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import SuperAdmin from "./pages/dashboard/superAdmin/superAdmin.jsx";
import Help from "./pages/help/help.jsx";
import Login from "./pages/login/login.jsx";
import Lesson from "./pages/lessons/lessons.jsx";
import Policy from "./pages/policies/policies.jsx";
import Admin from "./pages/dashboard/admin/adminLessons.jsx";
// import SuperAdmin from "./pages/dashboard/superadmin/admin.jsx";
import Home from "./pages/home/home.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Quizzes from "./pages/quizzes/quizzes.jsx";
import AdminLogin from "./pages/login/adminlogin.jsx";
import NotFoundPage from "./pages/404page/404.jsx";
import TableContent from "./pages/dashboard/superadmin/admin.jsx";
import ResourcesTables from "./components/resourcesTable.jsx/resourcesTable.jsx";
import { useAuthContext } from "./hooks/useAuthContext";
import PrivateSuperAdmin from "./utils/pivateroute.jsx";
import PrivateAdmin from "./utils/adminroute.jsx";
import RequireAuth from "./utils/requireAuth.jsx";
import Payment from "./pages/payment/payment.jsx";
import Layout from "./components/layout/layout.jsx";
import DashboardLayout from "./components/layout/dashboardLayout.jsx";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/help" element={<Help />}></Route>
        <Route exact path="/policies" element={<Policy />}></Route>
        <Route element={<PrivateAdmin />}>
          <Route
            path="/admin"
            element={
              <DashboardLayout>
                <Outlet />
              </DashboardLayout>
            }
          >
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="lessons" element={<Lesson />} />
            {/* <Route path="users" element={<Users />} /> */}
          </Route>
        </Route>

        <Route element={<PrivateSuperAdmin />}>
          <Route
            path="/superadmin"
            element={
              <DashboardLayout>
                <Outlet />
              </DashboardLayout>
            }
          >
            <Route path="dashboard" element={<SuperAdmin />} />
            {/* <Route path="role_admins" element={<Admins />} /> */}
            {/* <Route path="users" element={<Users />} /> */}
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="lessons" element={<Lesson />} />
          </Route>
        </Route>

        <Route exact path="/policies" element={<Policy />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/adminpanel" element={<AdminLogin />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/payment" element={<Payment />}></Route>

        <Route element={<RequireAuth />}>
          <Route
            exact
            path="/quizzes"
            element={
              <Layout>
                <Quizzes />
              </Layout>
            }
          ></Route>
          <Route
            exact
            path="/lessons"
            element={
              <Layout>
                <Lesson />
              </Layout>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
