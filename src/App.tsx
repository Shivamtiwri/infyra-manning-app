import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Wallet from "./page/Wallet";
import Licenses from "./page/Licenses";
import Setting from "./page/Setting";

function App() {
  useEffect(() => {
    // Electron IPC example
    if (window.electronAPI) {
      window.electronAPI
        .invoke("perform-action", { data: "test" })
        .then((response) => console.log("Response:", response));

      window.electronAPI.on("update", (data) => {
        console.log("Update received:", data);
      });
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/license" element={<Licenses />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
