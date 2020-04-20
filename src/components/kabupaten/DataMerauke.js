import React from 'react';
import merauke from '../../apis/merauke';

class DataMerauke extends React.Component {
    state = ({ merauke: [] });

    async componentDidMount() {
        const response = await merauke.get('/getKasusKonfirmasi/')
        this.setState({ merauke: response.data });
    };

    renderList() {
        return (
            <div className="ui four column stackable grid">
              <div className="column">
                <div className="ui violet fluid card grey">
                  <div className="content">
                    <div className="right-text">
                      <div className="description"><strong>MERAUKE</strong></div>
                        <div><p>POSITIF : <strong>{this.state.merauke.map(merauke =>(merauke.POSITIF))}</strong></p></div>
                        <div><p>SEMBUH : <strong>{this.state.merauke.map(merauke =>(merauke.SEMBUH))}</strong></p></div>
                        <div><p>MENINGGAL : <strong>{this.state.merauke.map(merauke =>(merauke.MENINGGAL))}</strong></p></div>
                      </div>
                      <div className="left-img"><img width="30%" src="assets/icon/papua1.png" alt="logo" /></div>
                    </div>
                  </div>
                </div>
            </div>
        );
        
    };

    render() {
        return (
            <div className="ui container">
              <div className="ui segment">
                {this.renderList()}
              </div>
            </div>
        );
    };
}

export default DataMerauke;