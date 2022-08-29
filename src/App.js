import React from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import useToken from "./pages/Login/UseToken";
import Tastea from "./pages/Tastea/Tastea";
import OmniHorse from "./pages/OmniHorse/OmniHorse";
import NavBar from "./layout/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const setToken = async (userToken) => {
  sessionStorage.setItem("token", JSON.stringify(userToken));
};

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

function App() {
  const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <BrowserRouter>
      {token ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
        </Routes>
      )}
      <Routes>
        <Route path="/navbar" element={<NavBar />} />
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
