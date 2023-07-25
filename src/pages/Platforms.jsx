import React from "react";
import { Link } from "react-router-dom";

const Platforms = () => {
  return (
    <div>
      <div className="btnContainer">
        <button className="btn btn-danger">
          <Link to={`/article/nyvolako`}>
            <div>Ny Volako</div>
          </Link>
        </button>
        <button className="btn btn-danger">
          <Link to={`/article/sunupay`}>
            <div>SUNUPAY</div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Platforms;
