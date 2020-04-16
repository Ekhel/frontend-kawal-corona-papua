import '../style.css';
import React from 'react';
import kawalcoronapapua from '../../apis/kawalcoronapapua';

class PapanInfoPapua extends React.Component {
    state = ({ papaninfo: [] })

    componentDidMount() {
        kawalcoronapapua.get('/api/papaninfo/')
        .then(response => {
            this.setState({ papaninfo: response.data.results });
        });
    }

    renderInfo() {
        return (
            <div className="">
              <div>
                <h4 className="ui teal label"><i className="icon calendar alternate outline"></i>Update Tanggal : {this.state.papaninfo.map(info =>(info.tanggal))}</h4>
              </div>
               <br/>
              <div className="ui grid">
                <div className="four wide column">
                  <div className="ui fluid card teals">
                    <div className="content">
                      <div className="right-text">
                        <h5>ODP :</h5>
                        <div className="desription"><h3>{this.state.papaninfo.map(info =>(info.odp))}</h3></div>
                        <div className="desription">ORANG</div>
                      </div>
                      <div className="left-img"><img width="30%" src="assets/icon/sedih2.png" alt="logo" /></div>
                    </div>
                  </div>
                </div>
                <div className="four wide column">
                  <div className="ui fluid card yellow">
                    <div className="content">
                      <div className="right-text">
                        <h5>PDP :</h5>
                        <div className="desription"><h3>{this.state.papaninfo.map(info =>(info.pdp))}</h3></div>
                        <div className="desription">ORANG</div>
                      </div>
                      <div className="left-img"><img width="30%" src="assets/icon/terluka.png" alt="logo" /></div>
                    </div>
                  </div>
                </div>
                <div className="four wide column">
                  <div className="ui fluid card pink">
                    <div className="content">
                      <div className="right-text">
                        <h5>POSITIF :</h5>
                        <div className="desription"><h3>{this.state.papaninfo.map(info =>(info.positif))}</h3></div>
                        <div className="desription">ORANG</div>
                      </div>
                      <div className="left-img"><img width="30%" src="assets/icon/terluka.png" alt="logo" /></div>
                    </div>
                  </div>
                </div>
                <div className="four wide column">
                  <div className="ui fluid card green">
                    <div className="content">
                      <div className="right-text">
                        <h5>SEMBUH :</h5>
                        <div className="desription"><h3>{this.state.papaninfo.map(info =>(info.sembuh))}</h3></div>
                        <div className="desription">ORANG</div>
                      </div>
                      <div className="left-img"><img width="30%" src="assets/icon/senang.png" alt="logo" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
    
    render() {
        return (
            <div>
              {this.renderInfo()}
            </div>
        )
    }
}

export default PapanInfoPapua;