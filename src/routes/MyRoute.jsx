import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function MyRoute({ isClosed, children }) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();


  useEffect(() => {
    if (isClosed && !isLoggedIn) {
      navigate("/login", { state: { prevPath: location.pathname } });
    }

  }, [isClosed, isLoggedIn, navigate, location.pathname]);
  return isLoggedIn ? children : <Navigate to={location.state?.prevPath || "/login"} replace />;
}

MyRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isClosed: PropTypes.bool,
};