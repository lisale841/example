import React from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Tastea from "./pages/Tastea/Tastea";
import OmniHorse from "./pages/OmniHorse/OmniHorse";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const setToken = async (userToken) => {
  console.log(userToken, "userToken");
  const storage = sessionStorage.setItem("token", JSON.stringify(userToken));
  return await storage;
};

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/tastea" element={<Tastea />} />
      </Routes>
      <Routes>
        <Route path="/omnihorse" element={<OmniHorse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
