import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";
import { Footer } from "../../Components/Footer/Footer";
import "../../Assets/avatar.jpg";

export const ProfilePage: React.FC = () => {
  const currUser = useSelector((state: RootState) => state.user);

  return (
    <div>
      <NavbarLoggedIn />

      <Footer />
    </div>
  );
};
