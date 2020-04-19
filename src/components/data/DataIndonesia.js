import '../style.css';
import React from 'react';

import kawalcorona from '../../apis/kawalcorona';
import kawalcoronapapua from '../../apis/kawalcoronapapua';
 //import DataGlobal from './DataGlobal';
import PapanInfoPapua from './PapanInfoPapua';

class DataIndonesia extends React.Component {
    state = ({ indo: [], papua: [] })

    componentDidMount() {
        kawalcorona.get('/indonesia/')
        .then(response => {
            this.setState({ indo: response.data });
        });

        kawalcoronapapua.get('/api/papaninfo/')
        .then(response => {
            this.setState({ papua: response.data });
        });
    }
    
    render() {
        return (
        <div>
          <div className="ui text container2">
            <h3 className="container"><i class="flag id"></i>Live Data Kasus Covid 19 Indonesia.</h3> 
          </div>
          <div className="ui divider"></div>
          <div className="ui four column stackable grid">
            <div className="column">
              <div className="ui fluid card yellow">
                <div className="content">
                  <div className="right-text">
                    <h5>TOTAL POSITIF</h5>
                    <div className="desription"><h3>{this.state.indo.map(indo =>(indo.positif))}</h3></div>
                    <div className="desription">ORANG</div>
                  </div>
                  <div className="left-img"><img width="30%" src="assets/icon/terluka.png" alt="logo" /></div>
                </div>
             </div>
            </div>
            <div className="column">
              <div className="ui green fluid card green">
                <div className="content">
                  <div className="right-text">
                    <h5>TOTAL SEMBUH</h5>
                    <div className="desription"><h3>{this.state.indo.map(indo =>(indo.sembuh))}</h3></div>
                    <div className="desription">ORANG</div>
                  </div>
                  <div className="left-img"><img width="30%" src="assets/icon/senang.png" alt="logo" /></div>
                </div>
             </div>
            </div>
            <div className="column">
              <div className="ui violet fluid card pink">
                <div className="content">
                  <div className="right-text">
                    <h5>TOTAL MENINGGAL</h5>
                    <div className="desription"><h3>{this.state.indo.map(indo =>(indo.meninggal))}</h3></div>
                    <div className="desription">ORANG</div>
                  </div>
                  <div className="left-img"><img width="30%" src="assets/icon/menangis.png" alt="logo" /></div>
                </div>
             </div>
            </div>
            <div className="column">
              <div className="ui violet fluid card grey">
                <div className="content">
                  <div className="right-text">
                    <div className="desription"><h5>PAPUA</h5></div>
                    <div><p>POSITIF : <strong>{this.state.papua.map(papua =>(papua.positif))}</strong></p></div>
                    <div><p>SEMBUH : <strong>{this.state.papua.map(papua =>(papua.sembuh))}</strong></p></div>
                    <div><p>MENINGGAL : <strong>{this.state.papua.map(papua =>(papua.meninggal))}</strong></p></div>
                  </div>
                  <div className="left-img"><img width="30%" src="assets/icon/papua1.png" alt="logo" /></div>
                </div>
             </div>
            </div>
            
          </div>
          <div className="ui divider"></div>
            <div className="ui segment">
              <div className="ui text container2">
                <h3 className="container">Live Data Kasus Covid 19 Papua.</h3> 
            </div>
              <br/>
              <PapanInfoPapua />
            </div>
        </div>
      );
    }
}

export default DataIndonesia;

