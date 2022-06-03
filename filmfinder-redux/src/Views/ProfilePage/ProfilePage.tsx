import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";
import { Footer } from "../../Components/Footer/Footer";
import { userInfo } from "os";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../../Interfaces/IMovie";
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import { AppDispatch } from "../../Store";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Slices/UserSlice";
import "../../Assets/menu.png";
import "../../Assets/setting.png";
import "../../Assets/profile-pic.png";
import "../../Assets/instagram.png";
import "../../Assets/arrow.png";

export const ProfilePage: React.FC = () => {
  const currUser = useSelector((state: RootState) => state.user);

  const navigator = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const [toggleUpdate, setToggleUpdate] = useState(false);

  const [username, setUsername] = useState<any>(currUser.user?.username);
  const [email, setEmail] = useState<any>(currUser.user?.email);
  const [firstName, setFirstName] = useState<any>(currUser.user?.firstName);
  const [lastName, setLastName] = useState<any>(currUser.user?.lastName);
  const [password, setPassword] = useState<any>(currUser.user?.password);

  // useEffect(() => {
  //   if(!currUser.user) {
  //     navigator('/');
  //   }
  // }, [currUser.user]);

  const updateProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currUser.user) {
      setToggleUpdate(true);
    } else {
      navigator("/login");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "username") {
      setUsername(event.target.value);
    } else if (event.target.name == "password") {
      setPassword(event.target.value);
    } else if (event.target.name == "email") {
      setEmail(event.target.value);
    } else if (event.target.name == "firstName") {
      setFirstName(event.target.value);
    } else {
      setLastName(event.target.value);
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (currUser.user) {
      let credentials = {
        userId: currUser.user.userId,
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
      };
      dispatch(updateUser(credentials));
    }
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="profile-content">
        <div className="profile-box">
          {toggleUpdate ? (
            <form className="update-form">
              <h3>Update</h3>
              <label className="label">Username: </label>
              <input
                type="text"
                className="username"
                name="username"
                autoComplete="off"
                value={username}
                onChange={handleChange}
                required
              ></input>
              <label className="label">Password: </label>
              <input
                type="password"
                className="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={handleChange}
                required
              ></input>
              <label className="label">Email: </label>
              <input
                type="email"
                className="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={handleChange}
                required
              ></input>
              <label className="label">First Name: </label>
              <input
                type="text"
                className="firstName"
                name="firstName"
                autoComplete="off"
                value={firstName}
                onChange={handleChange}
                required
              ></input>
              <label className="label">Last Name: </label>
              <input
                type="text"
                className="lastName"
                name="lastName"
                autoComplete="off"
                value={lastName}
                onChange={handleChange}
                required
              ></input>
              <button className="update-profile-btn" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          ) : (
            <>
              <h1>User Profile:</h1>
              <h2>Username: {currUser.user?.username}</h2>
              <h2>
                Name: {currUser.user?.firstName} {currUser.user?.lastName}
              </h2>
              <h2>Email: {currUser.user?.email}</h2>
              <button className="update-profile-btn" onClick={updateProfile}>
                Update
              </button>
            </>
          )}
        </div>
        <h2>Favorite Movies:</h2>
        <div className="favorite-list">
          {currUser.user ? (
            currUser.user.favorites.map((m: IMovie) => {
              return <MovieCard {...m} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* <div className="container-box">
        <div className="profile-container">
          <img src="menu.png" alt="" className="menu-icon" />
          <img src="setting.png" alt="" className="setting-icon" />
          <img src="profile-pic.png" alt="" className="profile-pic" />
          <h3>
            {currUser.user?.firstName} {currUser.user?.lastName}
          </h3>
          <p>I like movies</p>
          <div className="social-media">
            <img src="instagram.png" alt="" />
          </div>
          <button className="edit-profile-btn" onClick={updateProfile}>
            Edit
          </button>
          <div className="profile-bottom">
            <p>Learn More</p>
            <img src="arrow.png" alt="" />
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
};
