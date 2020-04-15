import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="inverted">
            <div className="ui container">
              <div className="ui violet fixed inverted menu">
                <div className="header item">
                  <img className="logo" src="/assets/coronaicon1.png" alt="logo" />
                  JAYAPURA DEV
                </div>
                <li className="item">
                  <Link to="/data/provinsi">Provinsi</Link>
                </li>
                <li className="item">
                  <Link to="/data/papua">Papua</Link>
                </li>
              </div>
            </div>
          </div>
    )
}

export default Header;