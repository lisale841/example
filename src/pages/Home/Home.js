import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    console.log("hit");
  };

  return (
    <>
      <div>Home</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
