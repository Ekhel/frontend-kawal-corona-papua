import React from 'react';
import { connect } from 'react-redux';
import { fetchPapua } from '../../actions';
import PapanInfoPapua from './PapanInfoPapua';

class DataPapua extends React.Component {
    componentDidMount() {
        this.props.fetchPapua();
    }

    renderList(){
        return (
            <div>
              <div className="ui segment">
                <div className="ui header">
                  Data Kasus Covid 19 Papua
                </div>
                <table className="ui celled table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Kab/Kota</th>
                      <th>Gender</th>
                      <th>Umur</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.papua.map(papua => (
                     <tr key={papua.id_penderita}>
                       <td>{papua.nomor}</td>
                       <td>{papua.lokasi}</td>
                       <td>{papua.gender}</td>
                       <td>{papua.umur}</td>
                       <td>{papua.status}</td>
                     </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        );
    };

    render() {
        return (
            <div>
            <PapanInfoPapua />
            <div className="ui divider"></div>
            {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { papua:  Object.values(state.papua) };
}

export default connect(mapStateToProps, { fetchPapua })(DataPapua);