import React from "react";
import "./LoginPage.css";
import { LoginForm } from "../../Components/LoginForm/LoginForm";

export const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <LoginForm />
    </div>
  );
};
