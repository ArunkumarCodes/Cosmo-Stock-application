import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SingleResults.css';

const SingleResults = (props) => {
    console.log(props.singleData);
    return (
        <Link to={'/stock' +props.singleData["1. symbol"] }>
        <div className='singleresults'>
            
                   <div className='item1'> {
                        props.singleData["1. symbol"]
                    }</div>
                
                   <div className='item2'> {
                        props.singleData["4. region"]
                    }</div>

                
                   <div className='item3'> {
                        props.singleData["7. timezone"]
                    }</div>
                
                    
                       <div className='item4'> {
                            props.singleData["2. name"]
                        }</div>
                    
                       <div className='item5'> Type:<br></br>{
                            props.singleData["3. type"]
                        }</div>
                    
                        <div className='item6'>Currency:<br></br>{
                            props.singleData["8. currency"]
                        }</div>
                   
                       <div className='item7'> Market Open:<br></br>{
                            props.singleData["5. marketOpen"]
                        }</div>
                    
                       <div className='item8'> Market Close:<br></br>{
                            props.singleData["6. marketClose"]
                        }</div>
                    
        </div>
        </Link>
    );
};

SingleResults.propTypes = {};

export default SingleResults;
