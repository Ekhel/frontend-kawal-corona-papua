import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="inverted">
            <div className="ui container">
              <div className="ui violet fixed inverted menu">
                <a className="header item" href="/frontend-kawal-corona-papua/">
                  <img className="logo" src="assets/icon/coronaicon1.png" alt="logo" />
                  JAYAPURA DEV
                </a>
                <li className="item">
                  <Link to="/frontend-kawal-corona-papua/provinsi">Provinsi</Link>
                </li>
                <li className="item">
                  <Link to="/frontend-kawal-corona-papua/papua">Papua</Link>
                </li>
              </div>
            </div>
          </div>
    )
}

export default Header;