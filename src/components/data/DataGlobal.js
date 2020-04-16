import React from 'react';
import { connect } from 'react-redux';
import { fetchGlobal } from '../../actions';

class DataGlobal extends React.Component {
    componentDidMount() {
        this.props.fetchGlobal();
    }

    renderList() {
        return (
            <div>
              <div className="ui segment">
                <div className="ui header">
                  <h3>Global Live Data Kasus Coronavirus (Covid 19) Data By J.H.U</h3>
                </div>
                <table className="ui celled table">
                  <thead>
                    <tr>
                      <th>Negara</th>
                      <th>POSITIF</th>
                      <th>SEMBUH</th>
                      <th>MENINGGAL</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.global.map(glob => (
                    <tr key={glob.attributes.OBJECTID}>
                      <td>{glob.attributes.Country_Region}</td>
                      <td>{glob.attributes.Confirmed}</td>
                      <td>{glob.attributes.Deaths}</td>
                      <td>{glob.attributes.Recovered}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
        )
    }
    

    render() {
        return (
            <div>
              <div>{this.renderList()}</div>
            </div>
            
        );
    };
}

const mapStateToProps = (state) => {
    return { global: Object.values(state.provinsi) };
}

export default connect(mapStateToProps, { fetchGlobal })(DataGlobal);