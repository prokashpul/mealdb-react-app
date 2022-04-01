import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import "./Spinner.css";
const Spiner = ({ loading }) => {
  return (
    <div className="spinner">
      <ClipLoader color={"#9013FE"} loading={loading} size={150} />
    </div>
  );
};

export default Spiner;
