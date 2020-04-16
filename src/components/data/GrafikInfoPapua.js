import React from 'react';
import Chart from "react-apexcharts";
import kawalcoronapapua from '../../apis/kawalcoronapapua';

class GrafikInfoPapua extends React.Component {
    state = ({ info: [] });

    componentDidMount() {
         kawalcoronapapua.get('/api/papaninfo/')
        .then(response => {
            this.setState({ papaninfo: response.data });
        });
    }
    
    constructor(props) {
    super(props);
    
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'GRAFIK KASUS COVID 19 PAPUA',
          align: 'left'
        },
        xaxis: {
          categories: ['4 April', '5 April', '6 April', '7 April', '8 April', '9 April', '10 April', '11 April' ,'12 April', '13 April', '14 April', '15 April']
        }
      },
      series: [
        {
          name: "POSITIF",
          data: ['18', '26', '26', '31', '45', '48', '51', '61', '65', '67', '68', '75']
        },
        {
          name: "PDP",
          data: ['44', '45', '45', '44', '54', '60', '60', '59', '59', '83', '83', '98']
        }
      ]
    };
  }

    render() {
        return (
            <div>
              <div className="ui segment">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="100%"
                    height="250%"
                />
              </div>
              
            </div>
        );
    };
}

export default GrafikInfoPapua;