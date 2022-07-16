import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import './StockDetails.css'

const StockTimeData =(props) =>{
    const [stockTimeData, setStockTimeData]=useState();

    useEffect(()=>{
        const url=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${props.symbol}&interval=5min&apikey=Y005M25E3QZ0MRDE`;
     axios.get(url)
     .then(
         response =>{
             
             console.log(response.data);
             setStockTimeData({...response.data})
             
            
         }
        ).catch(error=>console.log(error));
    }, [props.symbol]);
    return (
        <div className='timetable'>
            {
                (stockTimeData && stockTimeData["Time Series (5min)"]) ?
                <table >
                    <tr>
                        <td>Open</td>
                        <td>High</td>
                        <td>Low</td>
                        <td>Close</td>
                        <td>Volume</td>
                    </tr>
                    {
                Object.keys(stockTimeData["Time Series (5min)"]).map(
                    (ele, index)=>{

                        return <>
                        <tr>
                            <td colSpan={5}>{ele}</td>
                             </tr>
                             <tr>
                            <td>{stockTimeData["Time Series (5min)"][ele]["1. open"]}</td>
                            <td>{stockTimeData["Time Series (5min)"][ele]["2. high"]}</td>
                            <td>{stockTimeData["Time Series (5min)"][ele]["3. low"]}</td>
                            <td>{stockTimeData["Time Series (5min)"][ele]["4. close"]}</td>
                            <td>{stockTimeData["Time Series (5min)"][ele]["5. volume"]}</td>
                             </tr>
    
                             
                               
                            </>

                    }
                
                )
                    }
                </table>
                :"Loading!"
            }
        </div>
    );
};

StockTimeData.propTypes = {};

export default StockTimeData;