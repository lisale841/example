import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginPage from "../../scss/loginPage.module.scss";
import pokeLogo from "../../images/pokeLogo.png";
import PropTypes from "prop-types";

function LoginPage({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (loginInfo) => {
    return await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({
      userName,
      password,
    }).then((res) => setToken(res));
  };

  return (
    <div className={loginPage.wrapper}>
      <div className={loginPage.mainContainer}>
        <img className={loginPage.pokeLogo} src={pokeLogo} alt="pokeLogo" />
        <div className={loginPage.loginWrapper}>
          <div className={loginPage.loginContainer}>
            <form onSubmit={handleSubmit}>
              <label className={loginPage.login}>
                User Name:
                <input
                  id="12345"
                  type="text"
                  className={loginPage.login}
                  placeholder="username"
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </label>
              <label className={loginPage.login}>
                Password:
                <input
                  type="text"
                  className={loginPage.login}
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

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
