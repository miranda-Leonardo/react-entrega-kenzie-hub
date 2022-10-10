import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = () => {
  const [user, setUser] = useState("");
  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard user={user} />} />
      <Route path="*" element={<Login setUser={setUser} />} />
    </Routes>
  );
};
