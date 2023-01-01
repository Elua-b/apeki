import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="container">
      <div className="item logo">
        <div className="logo">
          <img src="/logo.png" className="logo" alt="" />
        </div>
        <div>Apeki-amizero</div>
      </div>
      <div className="item">
        <ul className="list">
          <li className="listItem">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="listItem">
            {" "}
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>

          {/* <Image src="/logo2.png" alt="" width="160px" height="69px"/> */}

          <li className="listItem">
            {" "}
            <Link className="link" to="/admission">
              Admission
            </Link>
            </li>
          <li className="listItem">
            {" "}
            <Link className="link" to="/ourteam">
              Our Team
            </Link>
          </li>
          <li className="listItem">
            {" "}
            <Link className="link" to="/contact">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className="item">
        <div className="cart">
          {/* <Image src="/cart.jpg"   alt="" width="30px" height="30px"/> */}
          <img src="/search2.png" className="search" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
