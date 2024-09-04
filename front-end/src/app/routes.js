import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";

import materialRoutes from "app/views/material-kit/MaterialRoutes";

// SESSION PAGES
const NotFound = Loadable(lazy(() => import("app/views/sessions/NotFound")));
const JwtLogin = Loadable(lazy(() => import("app/views/sessions/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("app/views/sessions/JwtRegister")));
const ForgotPassword = Loadable(lazy(() => import("app/views/sessions/ForgotPassword")));
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
// DASHBOARD PAGE
const Dashboard = Loadable(lazy(() => import("app/views/dashboard/Analytics")));
const Riwayat = Loadable(lazy(() => import("app/views/Riwayat/Riwayat")));
const Pengaturan = Loadable(lazy(() => import("app/views/Pengaturan/Pengaturan")));
const Layanan = Loadable(lazy(() => import("app/views/Layanan/Layanan")));
const Laporan = Loadable(lazy(() => import("app/views/Laporan/Laporan")));
const Kelola_Client = Loadable(lazy(() => import("app/views/Kelola_Client/Kelola_Client")));
const Kelola_Alat = Loadable(lazy(() => import("app/views/Kelola_Alat/Kelola_Alat")));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      { path: "/dashboard/default", element: <Dashboard />, auth: authRoles.admin },
      { path: "/Riwayat/default", element: <Riwayat />, auth: authRoles.admin },
      { path: "/Kelola_Alat/default", element: <Kelola_Alat />, auth: authRoles.admin },
      { path: "/Kelola_Client/default", element: <Kelola_Client />, auth: authRoles.admin },
      { path: "/Layanan/default", element: <Layanan />, auth: authRoles.admin },
      { path: "/Laporan/default", element: <Laporan />, auth: authRoles.admin },
      { path: "/Pengaturan/default", element: <Pengaturan />, auth: authRoles.admin },
      // e-chart route
      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor }
    ]
  },

  // session pages route
  { path: "/session/404", element: <NotFound /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "/", element: <Navigate to="dashboard/default" /> },
  { path: "*", element: <NotFound /> }
];

export default routes;
