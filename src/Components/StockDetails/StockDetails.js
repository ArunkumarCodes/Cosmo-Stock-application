import React from 'react';
import propTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import StockOverview from './StockOverview';
import StockTimeData from './StockTime';
import './StockDetails.css';

const StockDetails = () => {
    const params = useParams();
    console.log(params.symbol);
    return (
        <div >
            This is Stock Details components
            <StockOverview symbol={params.symbol} ></StockOverview>
            <StockTimeData symbol={params.symbol} ></StockTimeData>
        </div>
    );
};

StockDetails.propTypes = {};

export default StockDetails;
