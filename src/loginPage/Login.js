import React, { useState } from "react";
import loginPage from "../scss/loginPage.scss";
import pokeLogo from "../images/pokeLogo.png";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    // console.log(userName, "username change");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // console.log(password, "password change");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName, "userName submitted");
    console.log(password, "password submitted");
  };

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <img className="pokeLogo" src={pokeLogo} alt="pokeLogo" />
        <div className="loginWrapper">
          <div className="loginContainer">
            <form onSubmit={handleSubmit}>
              <label className="login">
                User Name:
                <input
                  type="text"
                  className="login"
                  placeholder="username"
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </label>
              <label className="login">
                Password:
                <input
                  type="text"
                  className="login"
                  placeholder="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
