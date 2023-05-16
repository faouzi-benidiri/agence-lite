import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      cette page n'existe pas !
      <Link to="/" className="card-text btn btn-outline-primary ">
        Retour a l'acceuil
      </Link>
    </div>
  );
};

export default NotFound;
