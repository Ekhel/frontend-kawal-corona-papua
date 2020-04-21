import React from 'react';

import InfoCorona from './InfoCorona';

class Beranda extends React.Component {
    render() {
        return (
            <div className="ui container">
              <div><InfoCorona /></div>
              <br/>
              <br/>
              <br/>
              <div className="ui segment">
                <div className="ui center aligned header">
                  <h3>Kamus COVID-19</h3>
                  <h5 className="mutted">Terdapat beberapa istilah pengelompokkan jenis-jenis penderita COVID-19</h5>
                </div>
                <div className="ui three column stackable grid">
                  <div className="column">
                     <div className="ui raised card">
                       <div className="content">
                         <div className="header">ODP</div>
                         <div className="meta">
                           <span className="category">ORANG DALAM PENGAWASAN</span>
                         </div>
                         <hr />
                         <div className="description">
                           <p>
                           Yang masuk kategori ODP yakni orang yang mengalami gejala demam 
                           lebih dari 38 derajat celcius atau ada riwayat demam atau ISPA tanpa pneumonia. 
                           Serta memiliki riwayat perjalanan ke negara yang terjangkit pada 14 hari 
                           terakhir sebelum timbul gejala.
                           </p>
                         </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="column">
                     <div className="ui raised card">
                       <div className="content">
                         <div className="header">PDP</div>
                         <div className="meta">
                           <span className="category">PASIEN DALAM PENGAWASAN</span>
                         </div>
                         <hr />
                         <div className="description">
                           <p>
                           Syarat PDP yakni orang mengalami gejala demam tinggi lebih dari 38 derajat celcius 
                           atau ada riwayat demam, ISPA, pneumonia ringan hingga berat. 
                           Selain itu memiliki riwayat perjalanan ke negara yang terjangkit 
                           atau kontak dengan orang yang terkonfirmasi positif virus corona.
                           </p>
                         </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="column">
                     <div className="ui raised card">
                       <div className="content">
                         <div className="header">OTG</div>
                         <div className="meta">
                           <span className="category">ORANG TANPA GEJALA</span>
                         </div>
                         <hr />
                         <div className="description">
                           <p>
                           Adalah seseorang yang tidak bergejala tapi berisiko telah tertular virus corona dari pasien Covid-19. 
                           Selain itu, OTG memiliki kontak erat dengan kasus positif Covid-19.
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

export default Beranda;