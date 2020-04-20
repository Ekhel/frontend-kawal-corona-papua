import React from 'react';

class Beranda extends React.Component {
    render() {
        return (
            <div className="ui container">
              <div className="ui segment">
                <div className="ui center aligned">
                  <h3>Apa Itu Covid 19 ?</h3>
                </div>
                <h5>
                    Coronavirus Disease 2019 atau COVID-19 adalah penyakit baru yang 
                    dapat menyebabkan gangguan pernapasan dan radang paru. 
                    Penyakit ini disebabkan oleh infeksi Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2). 
                    Gejala klinis yang muncul beragam, mulai dari seperti gejala flu biasa 
                    (batuk, pilek, nyeri tenggorok, nyeri otot, nyeri kepala) sampai yang berkomplikasi berat 
                    (pneumonia atau sepsis). 
                </h5>
                <hr />
                <br/>
                <div className="ui center aligned">
                  <h3>Bagaimana COVID-19 Menular?</h3>
                </div>
                <h5>
                    COVID-19 adalah penyakit baru dan para peneliti masih mempelajari bagaimana cara penularannya. 
                    Dari berbagai penelitian, 
                    metode penyebaran utama penyakit ini diduga adalah melalui droplet saluran pernapasan dan kontak 
                    dekat dengan penderita. 
                    Droplet merupakan partikel kecil dari mulut penderita yang dapat mengandung virus penyakit, 
                    yang dihasilkan pada saat batuk, bersin, atau berbicara. Droplet dapat melewati sampai jarak tertentu 
                    (biasanya 1 meter). 
                    Droplet bisa menempel di pakaian atau benda di sekitar penderita pada saat batuk atau bersin. 
                    Namun, partikel droplet cukup besar sehingga tidak akan bertahan atau mengendap di udara dalam waktu yang lama. 
                    Oleh karena itu, orang yang sedang sakit, diwajibkan untuk menggunakan masker untuk mencegah penyebaran droplet. 
                    Untuk penularan melalui makanan, sampai saat ini belum ada bukti ilmiahnya.  
                </h5>
              </div>
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
                        <div className="extra content">
                          <div className="right floated author">
                            Admin <img className="ui avatar image" src="assets/matt.jpg" alt="mat" />
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
                        <div className="extra content">
                          <div className="right floated author">
                            Admin <img className="ui avatar image" src="assets/matt.jpg" alt="mat" />
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
                        <div className="extra content">
                          <div className="right floated author">
                            Admin <img className="ui avatar image" src="assets/matt.jpg" alt="mat" />
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