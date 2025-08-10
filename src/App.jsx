import React from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout/Layout";
import Users from "./pages/Users";
import Analaytics from "./pages/Analaytics";
import Projects from "./pages/Projects";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/analytics" element={<Analaytics />} />
        <Route path="/project" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
