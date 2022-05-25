import React from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

export const RegisterPage: React.FC = () => {
  return (
    <body>
      <div className="center">
        <h1>Registration</h1>
        <form action="">
          <div className="txt_field">
            <input type="text" required />
            <label>First Name</label>
          </div>

          <div className="txt_field">
            <input type="text" required />
            <label>Last Name</label>
          </div>

          <div className="txt_field">
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="txt_field">
            <input type="text" required />
            <label>Password</label>
          </div>

          <div className="txt_field">
            <input type="text" required />
            <label>Email</label>
          </div>

          <div>
            <input type="submit" value="Sign Up">
              <Link to={"/homepage"}></Link>
            </input>
          </div>
        </form>
      </div>
    </body>
  );
};
