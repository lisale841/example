import React, { useState } from "react";
import loginPage from "../../scss/loginPage.scss";
import pokeLogo from "../../images/pokeLogo.png";
import PropTypes from "prop-types";

function LoginPage({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [tokenValue, setTokenValue] = useState();

  const loginUser = async (loginInfo) => {
    return await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((data) => data.json())
      .then((res) => setTokenValue(res))
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
    // const token = loginUser({
    //   userName,
    //   password,
    // });
    loginUser({
      userName,
      password,
    });
    setToken(tokenValue);
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
                  id="12345"
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

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
