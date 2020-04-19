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
                <div className="ui simple dropdown item">
                  Data <i className="dropdown icon"></i>
                  <div className="menu">
                    <li className="item">
                      <Link style={{ textDecoration: 'none', color: 'black' }} to="/frontend-kawal-corona-papua/provinsi" >PROVINSI</Link>
                    </li>
                    <li className="item">
                      <Link style={{ textDecoration: 'none', color: 'black' }} to="/frontend-kawal-corona-papua/papua">PAPUA</Link>
                    </li>
                    <li className="item">
                      <Link style={{ textDecoration: 'none', color: 'black' }} to="/frontend-kawal-corona-papua/rumahsakit">RS RUJUKAN</Link>
                    </li>
                    <li className="item">
                      <Link style={{ textDecoration: 'none', color: 'black' }} to="/frontend-kawal-corona-papua/grafikinfo">Grafik Info</Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Header;