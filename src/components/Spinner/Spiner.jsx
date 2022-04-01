import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import "./Spinner.css";
const Spiner = () => {
  let [loading, setLoading] = useState(true);
  return (
    <div className="spinner">
      <ClipLoader color={"#9013FE"} loading={loading} size={150} />
    </div>
  );
};

export default Spiner;
