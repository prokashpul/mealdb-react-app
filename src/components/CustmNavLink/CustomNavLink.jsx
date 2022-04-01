import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomNavLink.css";
const CustomNavLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link className={match ? "activeNav" : ""} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomNavLink;
