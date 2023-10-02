import React from "react";
import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>find the perfect place</h1>
        <p className="search-text">
          Search the largest selection of luxury high-rise apartments,
          multi-family, and signle family homes in any area nation wide.
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Enter Keyword.." />
          </div>
          <div className="radio">
            <input type="radio" checked />
            <label>Buy</label>
            <input type="radio" />
            <label>Rent</label>
            <button type="submit">
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
