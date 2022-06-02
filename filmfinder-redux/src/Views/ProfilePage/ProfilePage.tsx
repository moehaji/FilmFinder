import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";
import { Footer } from "../../Components/Footer/Footer";
import "../../avatar.jpg";

export const ProfilePage: React.FC = () => {
  const currUser = useSelector((state: RootState) => state.user);

  return (
    <div>
      <NavbarLoggedIn />

      <div className="profile-card">
        <div className="card-header">
          <div className="pic">
            <img src="avatar.jpg" alt="" />
          </div>
          <div className="name">
            {currUser.user?.firstName} {currUser.user?.lastName}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
