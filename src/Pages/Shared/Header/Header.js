import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user)

  return (
    //  Navigation

    <nav className="navbar shadow-lg navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/"> <img src="https://i.ibb.co/JQh4S11/logo-dark.png" alt="" width="100" /> </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-bookings">My Bookings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manage-bookings">Manage Bookings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manage-tour">Manage Tours</NavLink>
            </li>
            {!user?.email ?
            <li className="nav-item ps-5">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            :
            <li className="dropdown text-end ps-5 pt-2">
              <NavLink to="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={user.photoURL} alt="mdo" width="32" height="32" className="rounded-circle" />
              </NavLink>
              <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li className="dropdown-item">{user.displayName}</li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="#" onClick={logOut}>Sign out</NavLink></li>
              </ul>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>


  );
};

export default Header;