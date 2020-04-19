import React from 'react';
import { connect } from 'react-redux';
import { fetchPapua } from '../../actions';
import PapanInfoPapua from './PapanInfoPapua';
import GrafikInfoPapua from './GrafikInfoPapua';

class DataPapua extends React.Component {
    componentDidMount() {
        this.props.fetchPapua();
    }

    iconGender(papua) {
      if (papua.gender === 'Laki-Laki') {
        return (
          <img width="30px" src="assets/icon/male2.png" alt="male" />
        )
      } else {
        return <img width="30px" src="assets/icon/female2.png" alt="male" />
      }
    }

    LabelStatus(papua) {
      if (papua.status === 'Sembuh') {
        return (
          <p className="ui teal label">SEMBUH</p>
        )
      } else if (papua.status === 'Positif') {
          return <p className="ui pink label">POSITIF</p>
      } else {
          return <p className="ui violet label">MENINGGAL</p>
      }
      
    }
    renderList(){
        return (
            <div>
              <div className="ui segment">
                <div className="ui header">
                  Data Kasus Covid 19 Papua
                </div>
                <table className="ui celled table striped small">
                  <thead>
                    <tr>
                      <th className="ui center aligned">No</th>
                      <th>Kab/Kota</th>
                      <th className="ui center aligned">Gender</th>
                      <th className="ui center aligned">Umur</th>
                      <th className="ui center aligned">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.papua.map(papua => (
                     <tr key={papua.id_penderita}>
                       <td>{papua.nomor}</td>
                       <td className="uppercase">{papua.lokasi}</td>
                       <td>{this.iconGender(papua)}</td>
                       <td>{papua.umur}</td>
                       <td>{this.LabelStatus(papua)}</td>
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
              <GrafikInfoPapua />
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