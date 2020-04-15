import React from 'react';

const Footer = () => {
    return (
        <div className="ui inverted vertical footer segment">
          <div className="ui center aligned container">
            <div className="ui stackable inverted divided grid">
              <div className="three wide column">
                <h4 className="ui inverted header">API Services</h4>
                  <div className="ui inverted link list">
                    <a href="http://api.kawalcorona.com/indonesia" className="item">Data indonesia</a>
                    <a href="http://api.kawalcorona.com/indonesia/provinsi" className="item">Data Provinsi</a>
                    <a href="https://kawal-corona.herokuapp.com/api/penderita/" className="item">Data Papua</a>
                  </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Websait</h4>
                <div className="ui inverted link list">
                  <a href="https://kawalcorona.com" className="item">Kawal Corona</a>
                  <a href="https://hack.co.id/" className="item">Ethical Hacker Indonesia</a>
                  <a href="https://kawal-corona.herokuapp.com" className="item">Backend Kawal-Corona Papua</a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Hotline Corona</h4>
                <div className="ui inverted link list">
                  <a href="https://kawalcorona.com" className="item">021-5210-411</a>
                  <a href="https://kawalcorona.com" className="item">0812-1212-3119</a>
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header"> Dev By</h4>
                <p>Michael.</p>
                <div className="ui horizontal inverted small divided link list">
                  <a className="item" href="http://github.com/Ekhel/">Github</a>
                </div>
                
              </div>
              
            </div>
            <div className="ui inverted section divider"></div>
            <img src="assets/icon/coronaicon1.png" className="ui centered mini image" alt="logo" />
            <div className="ui horizontal inverted small divided link list">
              <a className="item" href="http://github.com/Ekhel/frontend-kawal-corona-papua">Repository</a>
              <a className="item" href="https://badges.gitter.im/jayapura_dev/react.svg">Gitter</a>
            </div>
          </div>
        </div>
    )
}

export default Footer;