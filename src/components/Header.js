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
                <a className="item" href="/">
                  <Link to="/">Indonesia</Link>
                </a>
                <a className="item" href="/">
                  <Link to="/data/provinsi">Provinsi</Link>
                </a>
                <a className="item" href="/">
                  <Link to="/data/papua">Papua</Link>
                </a>
              </div>
            </div>
          </div>
    )
}

export default Header;