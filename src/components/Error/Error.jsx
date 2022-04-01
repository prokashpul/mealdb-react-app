import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
const Error = () => {
  return (
    <div className="error">
      <div className="error-content">
        <h2>404</h2>
        <h3>
          <Link to="/">Back To Home</Link>
        </h3>
      </div>
    </div>
  );
};

export default Error;
