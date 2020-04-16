import '../style.css';
import React from 'react';

import kawalcorona from '../../apis/kawalcorona';
import DataGlobal from './DataGlobal';

class DataIndonesia extends React.Component {
    state = ({ indo: [] })

    componentDidMount() {
        kawalcorona.get('/indonesia/')
        .then(response => {
            this.setState({ indo: response.data });
        });
    }
    
    render() {
        return (
        <div>
          <div className="ui text container2">
            <h3 className="container">Live Data Kasus Covid 19 Indonesia & Papua.</h3> 
          </div>
          <div className="ui divider"></div>
          <div className="ui grid">
            <div className="four wide column">
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
            <div className="four wide column">
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
            <div className="four wide column">
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
            <div className="four wide column">
              <div className="ui violet fluid card grey">
                <div className="content">
                  <div className="right-text">
                    <div className="desription"><h5>PAPUA</h5></div>
                    <div><p>POSITIF : <strong>68</strong></p></div>
                    <div><p>SEMBUH : <strong>15</strong></p></div>
                    <div><p>MENINGGAL : <strong>5</strong></p></div>
                  </div>
                  <div className="left-img"><img width="30%" src="assets/icon/papua1.png" alt="logo" /></div>
                </div>
             </div>
            </div>
            
          </div>
          <div className="ui divider"></div>
            <div className="ui segment">
              <DataGlobal />
            </div>
        </div>
      );
    }
}

export default DataIndonesia;

