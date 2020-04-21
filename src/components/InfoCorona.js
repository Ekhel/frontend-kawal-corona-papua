import React from 'react';

class InfoCorona extends React.Component {
    render() {
        return (
            <div>
              <div className="ui two column stackable grid item">
                 <div className="column card">
                    <div className="ui items">
                      <div className="item">
                         <a className="ui small image" href="t">
                           <img src="assets/gambar1.png" alt="gambar" />
                         </a>
                         <div className="content">
                            <h4 className="header">Apa Itu COVID 19 ?</h4>
                            <div className="description">
                            <p>
                                Virus Corona atau COVID-19 adalah virus yang menyerang sistem pernapasan manusia. Virus ini masih berhubungan dengan penyebab SARS dan MERS yang sempat merebak beberapa tahun lalu.
                            </p>
                          </div>
                         </div>
                          
                       </div>
                    </div>
                 </div>
                 <div className="column">
                    <div className="ui items">
                      <div className="item">
                         <a className="ui small image" href="t">
                           <img src="assets/gambar2.png" alt="gambar" />
                         </a>
                         <div className="content">
                            <h4 className="header">Bagaimana COVID 19 Menular ?</h4>
                            <div className="description">
                            <p>
                              yakni apabila seseorang menyentuh 
                              permukaan atau benda apa pun yang sudah 
                              terkena atau terkontaminasi percikan atau 
                              tetesan dari seseorang yang terpapar COVID-19.
                              Virus corona, seperti diketahui dapat bertahan selama beberapa jam di berbagai 
                              permukaan, seperti kaca, plastik, baja, tembaga, hingga kayu.
                            </p>
                          </div>
                         </div>
                          
                       </div>
                    </div>
                 </div>
              </div>   
            </div>
        );
    };
}

export default InfoCorona;