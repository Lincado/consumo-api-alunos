// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Nav } from "./styled";
// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => {
  return (
    <>
      <Nav>
        <Link to="/">
          < FaHome size={24} />
        </Link>
        <Link to="/Register">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      </Nav>
    </>
  )
}