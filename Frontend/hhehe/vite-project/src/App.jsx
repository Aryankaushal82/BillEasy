import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./layouts/Landing";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import RtlLayout from "./layouts/rtl";


const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
      <Route path="/" element={<Landing/>}/>
    </Routes>
  );
};

export default App;
