import React from "react";
import { Link } from "react-router-dom";

const Platforms = () => {
  return (
    <div className="btnContainer">
      <img src="/images/LOGO-CEM.png" alt="" />
      <p>
        Bienvenue sur le guide et manuel d'utilisation des plateformes Ny Volako
        et Sunupay
      </p>
      <p className="normalTxt">
        Choisissez l'unes des plateformes auquel vous voulez avoir plus
        d'information.
      </p>
      <div className="btns">
        <button className="btn btn-danger">
          <Link to={`/menu/nyvolako`}>
            <div>Ny Volako</div>
          </Link>
        </button>
        <button className="btn btn-danger">
          <Link to={`/menu/sunupay`}>
            <div>SUNUPAY</div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Platforms;
