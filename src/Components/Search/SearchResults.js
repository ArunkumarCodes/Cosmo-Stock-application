import React from 'react';
import propTypes from 'prop-types';
import SingleResults from './SingleResults';
import Logo from '../../img/search.png';

const SearchResults = (props) => {
    return (
        <div>
            {
                (props.searchData && props.searchData.length )?
                props.searchData.map((ele, index)=>{
                    return <SingleResults singleData={ele}></SingleResults>
                }) : <div><img src={Logo}  /> <br></br> Enter a search term in the input box above to search for stock information.</div>
                
            }
           
           
        </div>
    );
};

SearchResults.propTypes = {};

export default SearchResults;
