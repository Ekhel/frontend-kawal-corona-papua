import React from 'react';
import { connect } from 'react-redux';
import { fetchProvinsi } from '../../actions';

class DataProvinsi extends React.Component {
    componentDidMount() {
        this.props.fetchProvinsi();
    }

    renderList() {
        return (
            <div>
              <div className="ui segment">
                <h3 className="ui header">
                  <i className="id flag"></i> Data Kasus Covid 19 Provinsi
                </h3>
                <table className="ui pink table">
                  <thead>
                    <tr>
                      <th>KODE</th>
                      <th>Provinsi</th>
                      <th>Positif</th>
                      <th>Sembuh</th>
                      <th>Meninggal</th>
                    </tr>
                    </thead> 
                    <tbody>
                    {this.props.provinsi.map(provinsi => (
                      <tr key={provinsi.attributes.FID}>
                        <td>{provinsi.attributes.Kode_Provi}</td>
                        <td>{provinsi.attributes.Provinsi}</td>
                        <td>{provinsi.attributes.Kasus_Posi}</td>
                        <td>{provinsi.attributes.Kasus_Semb}</td>
                        <td>{provinsi.attributes.Kasus_Meni}</td>
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
            <div>{this.renderList()}</div>
        );
    };
    
}

const mapStateToProps = (state) => {
    return { provinsi: Object.values(state.provinsi) };
}

export default connect(mapStateToProps, { fetchProvinsi })(DataProvinsi);