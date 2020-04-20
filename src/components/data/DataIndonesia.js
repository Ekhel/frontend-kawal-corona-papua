import '../style.css';
import React from 'react';

import kawalcorona from '../../apis/kawalcorona';
import kawalcoronapapua from '../../apis/kawalcoronapapua';
 //import DataGlobal from './DataGlobal';
import PapanInfoPapua from './PapanInfoPapua';

class DataIndonesia extends React.Component {
    state = ({ indo: [], papua: [] })

    async componentDidMount() {
        const indo = await kawalcorona.get('/indonesia/');
        this.setState({ indo: indo.data });

        const papua = await kawalcoronapapua.get('/api/papaninfo/');
        this.setState({ papua: papua.data });
    }
    
    render() {
        return (
        <div>
          <div className="ui text container2">
            <h3 className="container"><i className="flag id"></i>Live Data Kasus Covid 19 Indonesia.</h3> 
          </div>
          <div className="ui divider"></div>
          <div className="ui four column stackable grid">
            <div className="column">
              <div className="ui fluid card yellow">
                <div className="content">
                  <div className="right-text">
                    <h5>TOTAL POSITIF</h5>
                    <div className="description"><h3>{this.state.indo.map(indo =>(indo.positif))}</h3></div>
                    <div className="description">ORANG</div>
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
                    <div className="description"><h3>{this.state.indo.map(indo =>(indo.sembuh))}</h3></div>
                    <div className="description">ORANG</div>
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
                    <div className="description"><h3>{this.state.indo.map(indo =>(indo.meninggal))}</h3></div>
                    <div className="description">ORANG</div>
                  </div>
                  <div className="left-img"><img width="30%" src="assets/icon/menangis.png" alt="logo" /></div>
                </div>
             </div>
            </div>
            <div className="column">
              <div className="ui violet fluid card grey">
                <div className="content">
                  <div className="right-text">
                    <div className="description"><p>PAPUA</p></div>
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

