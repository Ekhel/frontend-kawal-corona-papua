import React from 'react';
import { connect } from 'react-redux';
import { fetchRumahSakit } from '../../actions';

class DataRumahSakit extends React.Component {
    componentDidMount() {
        this.props.fetchRumahSakit();
    }

    renderList() {
        return (
            <div>
              <div className="ui segment">
                <div className="header"><i className="hospital outline icon"></i> RUMAH SAKIT RUJUKAN PAPUA</div>
                <table className="ui called table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>RUMAH SAKIT</th>
                      <th>LOKASI</th>
                      <th>Lat</th>
                      <th>Lon</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.rs.map(rumahsakit => (
                    <tr key={rumahsakit.id_rs}>
                      <td>{rumahsakit.id_rs}</td>
                      <td>{rumahsakit.rumah_sakit}</td>
                      <td>{rumahsakit.lokasi}</td>
                      <td>{rumahsakit.lat}</td>
                      <td>{rumahsakit.lon}</td>
                    </tr>
                ))}
                  </tbody>
                </table>
              </div>  
            </div>
        )
    }
    
    render() {
        return <div>{this.renderList()}</div>;
    }

}

const mapStateToProps = (state) => {
    return { rs: Object.values(state.papua) };
}

export default connect(mapStateToProps, { fetchRumahSakit })(DataRumahSakit);