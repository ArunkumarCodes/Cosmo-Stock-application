import React, {useState} from 'react';
import propTypes from 'prop-types';
import SearchResults from './SearchResults';
import axios from 'axios';
import './Search.css';

const Search = () => {
    const [keyword, setkeyword] = useState("");
    const [searchData, setSearchData] = useState();
    const keyDownHandler = (event) => {
        if(event.keyCode ==13){
            console.log(event.keyCode);
            console.log("Enter pressed! Do our operation!")
            console.log("The keyword is: "+ keyword);
            // axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=Y005M25E3QZ0MRDE`)
            // axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${keyword}&interval=5min&apikey=Y005M25E3QZ0MRDE`)
            axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=Y005M25E3QZ0MRDE`)
            .then(response=> {
                console.log(response);
                if(response.data && response.data.bestMatches){
                    setSearchData([...response.data.bestMatches]);
                }
            }).catch(error => console.log(error));
            
        }
    }
    return (
        <>
        <div className='ele-container'>
           <input onKeyDown={keyDownHandler} onChange={(e)=> setkeyword(e.target.value)} type="text" className='search' placeholder='Enter you Stock name...' value={keyword}/>
        </div>
        <SearchResults searchData={searchData}></SearchResults>
        </>
    );
};

Search.propTypes = {};

export default Search;
