import '../style.css';
import React from 'react';
import kawalcorona from '../../apis/kawalcorona';

class PapanInfoGlobal extends React.Component {
    state = ({ positif: [], sembuh: [], meninggal: [] });

    componentDidMount() {
        kawalcorona.get('/positif/')
        .then(response => {
            this.setState({ positif: response.data });
        });

        kawalcorona.get('/sembuh/')
        .then(response => {
            this.setState({ sembuh: response.data });
        });

        kawalcorona.get('/meninggal/')
        .then(response => {
            this.setState({ meninggal: response.data });
        });
    }

    renderInfoGlobal() {
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
                    <div className="desription"><h3>{this.state.positif.value}</h3></div>
                    <div className="desription">ORANG</div>
                  </div>
                  <div className="left-img"><img width="30%" src="build/assets/icon/terluka.png" alt="logo" /></div>
                </div>
             </div>
            </div>
            <div className="four wide column">
              <div className="ui green fluid card green">
                <div className="content">
                  <div className="right-text">
                    <h5>TOTAL SEMBUH</h5>
                    <div className="desription"><h3>{this.state.sembuh.value}</h3></div>
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
                    <div className="desription"><h3>{this.state.meninggal.value}</h3></div>
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
                    <div className="desription"><h5>INDONESIA</h5></div>
                    <div><p>POSITIF : <strong>68</strong></p></div>
                    <div><p>SEMBUH : <strong>15</strong></p></div>
                    <div><p>MENINGGAL : <strong>5</strong></p></div>
                  </div>
                  <div className="left-img"><img width="30%" src="/assets/icon/papua1.png" alt="logo" /></div>
                </div>
             </div>
            </div>
          </div>
        </div>
      );
    };

    render() {
        return (
            <div>{this.renderInfoGlobal()}</div>
        )
    }
}

export default PapanInfoGlobal;