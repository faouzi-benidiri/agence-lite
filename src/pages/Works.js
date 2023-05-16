import React from "react";
import { Link } from "react-router-dom";

const Works = ({ data }) => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center p-5">
        <h1>Les études de Cas</h1>
      </div>
      <div className="row justify-content-center">
        {data.map((item, index) => (
          <div
            className="card border-info mb-2 m-2 "
            style={{ maxWidth: "20rem" }}
            key={index}
          >
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.summary}</p>
              <Link
                className="card-text btn btn-outline-primary "
                to={`${item.title}`}
              >
                Voir l'étude
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
