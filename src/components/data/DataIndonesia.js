import '../style.css';
import React from 'react';

import kawalcorona from '../../apis/kawalcorona';

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
            <h3>Live Data Kasus Covid 19 Indonesia & Papua.</h3> 
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
                  <div className="left-img"><img width="30%" src="/assets/icon/terluka.png" alt="logo" /></div>
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
                  <div className="left-img"><img width="30%" src="/assets/icon/senang.png" alt="logo" /></div>
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
                  <div className="left-img"><img width="30%" src="/assets/icon/menangis.png" alt="logo" /></div>
                </div>
             </div>
            </div>
            <div className="four wide column">
              <div className="ui violet fluid card grey">
                <div className="content">
                  <div className="right-text">
                    <div className="desription"><h5>PAPUA</h5></div>
                    <div className=""><text>POSITIF : <strong>68</strong></text></div>
                    <div className=""><text>SEMBUH : <strong>15</strong></text></div>
                    <div className=""><text>MENINGGAL : <strong>5</strong></text></div>
                  </div>
                  <div className="left-img"><img width="30%" src="/assets/icon/papua1.png" alt="logo" /></div>
                </div>
             </div>
            </div>
          </div>
        </div>
      );
    }
}

export default DataIndonesia;

