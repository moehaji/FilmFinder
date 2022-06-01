import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarLoggedIn.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { AppDispatch } from "../../Store";
import { useDispatch } from "react-redux";
import { clearUser } from "../../Slices/UserSlice";

export const NavbarLoggedIn: React.FC = () => {
  const currUser = useSelector((state: RootState) => state.user);
  const navigator = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleLogoutNavigate = () => {
    localStorage.clear();
    dispatch(clearUser());
    navigator("/");
  };

  const handleLogin = () => {
    navigator("/login");
  };

  return (
    <div>
      <nav className="navbar-loggedin">
        <h2>
          <Link to={"/"} className="logo">
            Film<span>Finder</span>
          </Link>
        </h2>

        <ul>
          <li className="nav-list">
            <Link to={"/"} className="nav-item">
              Home
            </Link>
          </li>

          {/* <li className="nav-list">
            <Link to={"/search"} className="nav-item">
              Search
            </Link>
          </li> */}

          {currUser.user ? (
            <li className="nav-list">
              <Link to={"/profile"} className="nav-item">
                Profile
              </Link>
            </li>
          ) : (
            <></>
          )}
        </ul>

        {currUser.user ? (
          <button className="logout-btn" onClick={handleLogoutNavigate}>
            Logout
          </button>
        ) : (
          <button className="logout-btn" onClick={handleLogin}>
            Log In
          </button>
        )}
      </nav>
    </div>
  );
};
