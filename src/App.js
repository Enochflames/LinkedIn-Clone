import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUsername={setUsername} />} />
        <Route path="/home" element={<Home username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;
