import { Route, Routes } from "react-router-dom";
import "./reset.css";
import "./normalize.css";
import "./App.css";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
