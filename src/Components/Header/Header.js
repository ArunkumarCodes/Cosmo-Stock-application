import React from 'react';
import propTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='headerStyle'>
            <Link to={"/"}>CosmoStocks</Link>
        </div>
    );

};

Header.propTypes = {};

export default Header;
