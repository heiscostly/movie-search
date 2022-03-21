import React from "react";

const MovieItem = ({ data }) => {
  return (
    <>
      <div className="div">
        <div className="movie__item">
          <h4>{data.Title}</h4>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
