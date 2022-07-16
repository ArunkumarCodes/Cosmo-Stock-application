import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
// import './StockDetails.css';

const StockOverview =(props) => {
    const [stock, setstock]= useState();

    useEffect( ()=> {
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.symbol}&apikey=Y005M25E3QZ0MRDE`)
        .then(
            response => {
                console.log("Stock Overview data");
                console.log(response.data);
                setstock({...response.data})
            }
        ).catch(error=>console.log(error))

    }, [props.symbol]);

    return (
        <div style={{textAlign: "left", padding: "30px", height:"100%", lineHeight:"1.7"}} >
            {
                stock ?
                Object.keys(stock).map((ele, index)=>{
                    return <div>
                        <div>{ele} : {stock[ele]}</div>
                        </div>

                })
                : "Loading..."
            }

        </div>
    );
};

// StockOverview.PropTypes ={};

export default StockOverview;