import React from "react";
import { useParams } from "react-router-dom";

const StudyCase = ({ data }) => {
  const { title } = useParams();
  return (
    <>
      <div className="container">
        {data
          .filter((item) => item.title === title)
          .map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default StudyCase;
