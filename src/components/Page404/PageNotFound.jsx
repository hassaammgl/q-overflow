import React from "react";
import img1 from "../../Assests/kid404.png";
import {Link} from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="box">
        <aside className="boy">
          <img src={img1} />
        </aside>
        <aside className="text">
          <h1>OOP's </h1>
          <h2>Page not Found</h2>

          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </aside>
      </div>
    </div>
  );
};

export default PageNotFound;
