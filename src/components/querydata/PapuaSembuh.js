import React from 'react';
import { connect } from 'react-redux';
import { fetchPapuaSembuh } from '../../actions';

class PapuaSembuh extends React.Component {
    componentDidMount() {
        this.props.fetchPapuaSembuh();
    }

    iconGender(papua) {
      if (papua.gender === 'Laki-Laki') {
        return (
          <img width="10%" src="assets/icon/male.png" alt="male" />
        )
      } else {
        return <img width="10%" src="assets/icon/female.png" alt="male" />
      }
    }

    LabelStatus(papua) {
      if (papua.status === 'Sembuh') {
        return (
          <p class="ui teal label">SEMBUH</p>
        )
      } else if (papua.status === 'Positif') {
        return <p class="ui pink label">POSITIF</p>
      } else {
        return <p class="ui violet label">MENINGGAL</p>
      }
      
    }

    renderList(){
        return (
            <div>
              <div className="ui segment">
                <div className="ui header">
                  Data Kasus Covid 19 Papua
                </div>
                <table className="ui celled table small">
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
                       <td className="uppercase">{papua.lokasi}</td>
                       <td className="center">{this.iconGender(papua)}</td>
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
              <div className="ui divider"></div>
              {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { papua:  Object.values(state.querysembuh) };
}

export default connect(mapStateToProps, { fetchPapuaSembuh })(PapuaSembuh);