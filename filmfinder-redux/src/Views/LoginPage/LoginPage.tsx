import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  return (
    <body>
      <div className="center">
        <h1>Login</h1>
        <form action="">
          <div className="txt_field">
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="txt_field">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login" />

          <div className="signup_link">
            Not a member? <Link to={"/register"}>Sign up</Link>
          </div>
        </form>
      </div>
    </body>
  );
};
