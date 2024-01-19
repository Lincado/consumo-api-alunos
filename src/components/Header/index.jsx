// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/modules/auth/actions";
import { Nav } from "./styled";
// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
      e.preventDefault();
      dispatch(actions.loginFailure());
      navigate("/");
    }
  return (
    <>
      <Nav>
        <Link to="/">
          < FaHome size={24} />
        </Link>
        <Link to="/Register">
          <FaUserAlt size={24} />
        </Link>
        {isLoggedIn ? (
          <Link onClick={handleLogout} to="/login">
          <FaPowerOff size={24} />
          </Link>
        ) : (
          <Link to="/login">
          <FaSignInAlt size={24} />
          </Link>
        ) }
        {isLoggedIn &&  <FaCircle size={24} className="status-login"/>}
      </Nav>
    </>
  )
}