import React from "react";
import { useNavigate } from "react-router-dom";
import navBar from "../scss/navBar.module.scss";
import pokeLogo from "../images/pokeLogo.png";

const NavBar = () => {
  let navigate = useNavigate();
  const handleHome = () => {
    console.log("home button clicked");
  };

  const handlePokeDex = () => {
    console.log("pokedex clicked");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    console.log("hit");
  };

  return (
    <div className={navBar.wrapper}>
      <div className={navBar.container}>
        <div className={navBar.logo}>
          <img className={navBar.font} src={pokeLogo} alt="pokeLogo" />
        </div>
        <div className={navBar.tabContainer}>
          <div className={navBar.tabs}>
            <div className={navBar.font} onClick={handleHome}>
              Home
            </div>
            <div className={navBar.font} onClick={handlePokeDex}>
              PokeDex
            </div>
            <div className={navBar.font} onClick={handleLogout}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
