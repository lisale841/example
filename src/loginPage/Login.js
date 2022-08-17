import React from "react";
import loginPage from "../scss/loginPage.scss";
import pokeLogo from "../images/pokeLogo.png";

function LoginPage() {
  return (
    <div className="wrapper">
      <div className="mainContainer">
        <img className="pokeLogo" src={pokeLogo} alt="pokeLogo" />
        <div className="loginWrapper">
          <div className="login">Helloworld</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
