import React, { useState } from "react";
import axios from "axios";

import HeroSection from "../components/HeroSection";
import MovieItem from "../components/MovieItem";
import SearchInput from "../components/SearchInput";

const Home = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
  });

  const apiurl = "https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=tt3896198&apikey=e6867dee";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let res = data.Search;

        setState((prevState) => {
          return { ...prevState, results: res };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };
  return (
    <div>
      <HeroSection />
      <SearchInput handleInput={handleInput} search={search} />
      <h4>Movie Category {state.s}</h4>
      <div className="grid__container">
        {state.results.map((data) => (
          <MovieItem data={data} key={data.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default Home;
