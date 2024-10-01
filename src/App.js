import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login"; 
import Home from "./pages/Home"; 


function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
      
        <Route path="/login" element={<Login setUsername={setUsername} />} />

        
        <Route path="/home" element={<Home username={username} showRightside={true} />} />

        <Route
          path="/Network"
          element={<Home username={username} showRightside={false} content="network" />}
        />
        <Route
          path="/Jobs"
          element={<Home username={username} showRightside={false} content="jobs" />}
        />
        <Route
          path="/Notifications"
          element={<Home username={username} showRightside={false} content="notifications" />}
        />

        
        <Route path="*" element={<Navigate to={username ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
