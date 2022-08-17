import React from "react";
import loginPage from "../scss/loginPage.scss";
import pokeLogo from "../images/pokeLogo.png";

function LoginPage() {
  return (
    <div className="wrapper">
      <div className="mainContainer">
        <img className="pokeLogo" src={pokeLogo} alt="pokeLogo" />
        <div className="loginWrapper">
          <div className="login">
             User Name:
            <input type="text" placeholder="username" className="login"></input>
          </div>
          <div className="login">
             Password:
            <input type="text" placeholder="password" className="login"></input>
          </div>
          <button>Login</button>

         </div>
      </div>
    </div>
  );
}

export default LoginPage;
