import React from "react";
import Logo from './logo .svg'
const nav = () => {
    return(
      
      <nav className="header">
        <img src={Logo} alt="Little Lemon Logo"/>      
        <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <a href="#orderOline">Order Oline</a>
        </li>
        <li>
            <a href="#login">Login</a>
        </li>
        </ul>
        </nav>
    );
}
export default nav;