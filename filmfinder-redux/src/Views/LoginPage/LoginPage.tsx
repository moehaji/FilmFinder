import React from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginPage: React.FC = () => {
  const navigator = useNavigate();

  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleLogin = () => {
    navigator("/homepage");
  };

  return (
    <body>
      <div className="center">
        <h1>Login</h1>
        <form action="">
          <div className="txt_field">
            <input
              type="text"
              name="username"
              required
              onChange={handleInput}
            />
            <label>Username</label>
          </div>

          <div className="txt_field">
            <input
              type="password"
              name="password"
              required
              onChange={handleInput}
            />
            <label>Password</label>
          </div>

          <div className="pass">Forgot Password?</div>
          {/* <div>
            <Link to={"/homepage"} onClick={handleLogin}>
              <input type="submit" value="Login" />
            </Link>
          </div> */}

          {/* <div>
            <button onClick={handleLogin} className="login-btn">
              Login
            </button>
          </div> */}

          <button onClick={handleLogin} className="login-btn">
            Login
          </button>

          <div className="signup_link">
            Not a member? <Link to={"/register"}>Sign up</Link>
          </div>
        </form>
      </div>
    </body>
  );
};
