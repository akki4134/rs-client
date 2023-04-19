import React from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { ImFeed } from "react-icons/im";

function Footer() {
  return (
    <React.Fragment>
      
      <nav className="footer center">
        <div className="logo">RS</div>
        <ul className="row">
          <li className="active row center">
            <TbLayoutDashboard />
            <h6>Home</h6>
          </li>
          <li className="row center">
            <FaRegNewspaper />
            <h6>News</h6>
          </li>
          <li className="row center">
            <h6>Search</h6>
          </li>
          <li className="row center">
            <ImFeed />
            <h6>Feeds</h6>
          </li>
          <li className="row center">
            <BsGraphUpArrow />
            <h6>Reports</h6>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Footer;
