import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";

export const HomePage: React.FC = () => {
  return (
    <body>
      <Navbar />
      <h1>Home Page</h1>
    </body>
  );
};
