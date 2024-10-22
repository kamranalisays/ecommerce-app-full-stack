import React from "react";

import './PageNotFound.css';
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pgnf">
        <h1 className="pgnf-title"> 404 </h1>
        <h2 className="pgnf-heading"> Page Not Found </h2>
        <Link to="/" className="pgnf-btn"> Go Back </Link>
    </div>
  );
};

export default PageNotFound;
