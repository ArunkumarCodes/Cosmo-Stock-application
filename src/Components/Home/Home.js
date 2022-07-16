import React from "react";
import Search from "../Search/Search";
import './Home.css';
import propTypes from 'prop-types';
import head from '../../img/stock.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className=" details"
        // style={{
        //   hight: "100px",
        //   backgroundColor: "#EEE",
        //   border: "1px solid #333",
        // }}
      >
        <img src={head} className='headimg'></img>
        <h1>CosmoStocks</h1>
      <p>Bringing the world of stocks to your universe!</p>
      <h5>CosmoStocks brings the universe of stocks to your pocket. Browse through IPOs or keep then in a single Watchlist.</h5>
      </div>
      <div 
        style={{
          display: "flex",
          flexDirection: "row",
          padding:"20px",
        }}
      >
        <div className="">
          <div className="search-bar" > 
          <h3>Watchlist!</h3>
              <p >The world of finance is volatile. Every few seconds could see a major change in every stocks's fate. CosmoStocks, 
              powered by alpha Vantage, helps you search your favorite Stocks and keep an eye out on 
              its minute-by-minute changes. Find your favorite stock by entering its symbol or a character in the box below:
              </p>
          </div>
          <div>
            <Search />
          </div>
        </div>
        
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
