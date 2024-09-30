import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home username={username} showRightside={true} />} />
        <Route path="/network" element={<Home username={username} showRightside={false} content="network" />} />
        <Route path="/jobs" element={<Home username={username} showRightside={false} content="jobs" />} />
        <Route path="/notifications" element={<Home username={username} showRightside={false} content="notifications" />} />
      </Routes>
    </Router>
  );
}

export default App;
