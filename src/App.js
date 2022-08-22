import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Tastea from "./pages/Tastea/Tastea";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
      </Routes> */}
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/tastea" element={<Tastea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
