import React from "react";
import navBar from "../scss/navBar.module.scss";

const NavBar = () => {
  return (
    <div className={navBar.wrapper}>
      <div className={navBar.container}>
        <div className={navBar.logo}>
          <div className={navBar.font}>logo</div>
        </div>
        <div className={navBar.tabContainer}>
          <div className={navBar.tabs}>
            <div className={navBar.font}>Home</div>
            <div className={navBar.font}>PokeDex</div>
            <div className={navBar.font}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
